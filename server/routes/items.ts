import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/items'

const router = Router()

// Item interface
// interface Item {
//   id: number
//   name: string
//   image: Buffer // Blob data will be stored as a Buffer in Node.js
//   new: boolean
//   price_in_NZD: number
//   NZD_raised: number
// }

// Route to get all items x
router.get('/', async (req, res) => {
  try {
    const result = await db.getAllItems()
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

// Route to get a specific item by ID x
router.get('/:id', async (req, res) => {
  try {
    const result = await db.getItemById(Number(req.params.id))
    if (!result) {
      return res.status(404).json({ errorMessage: 'Item not found' })
    }
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

// Route to create a new item x
router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { name, image, new: isNew, price_in_NZD, NZD_raised } = req.body
    const id = await db.addItem({
      name,
      image,
      new: isNew,
      price_in_NZD,
      NZD_raised,
    })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

// Route to update an item by ID x
router.put('/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { name, image, new: isNew, price_in_NZD, NZD_raised } = req.body
    const id = Number(req.params.id)
    const result = await db.updateItem({
      id,
      name,
      image,
      new: isNew,
      price_in_NZD,
      NZD_raised,
    })
    if (!result) {
      return res.status(404).json({ errorMessage: 'Item not found' })
    }
    res.sendStatus(StatusCodes.NO_CONTENT)
  } catch (err) {
    next(err)
  }
})

// Route to delete an item by ID x
router.delete('/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const id = Number(req.params.id)
    const result = await db.deleteItem(id)
    if (!result) {
      return res.status(404).json({ errorMessage: 'Item not found' })
    }
    res.sendStatus(StatusCodes.NO_CONTENT)
  } catch (err) {
    next(err)
  }
})

export default router
