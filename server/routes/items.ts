import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/functions/items'
import * as registerItemsDB from '../db/functions/register_items'

const router = Router()

// Route to get all items
router.get('/', async (req, res) => {
  try {
    const result = await db.getAllItems()
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

// GET Route to get a specific item by ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10)
    if (isNaN(id)) {
      return res.status(400).json({ errorMessage: 'Invalid item ID' })
    }
    const result = await db.getItemById(id)
    if (!result) {
      return res.status(404).json({ errorMessage: 'Item not found' })
    }
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

// POST Route to create a new item
router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { item, registerid } = req.body
    const id = await db.addItem(item)
    await registerItemsDB.addRegisterItem(id, registerid)
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

// PATCH Route to update an item by ID
router.patch('/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const id = parseInt(req.params.id, 10)
    if (isNaN(id)) {
      return res.status(400).json({ errorMessage: 'Invalid item ID' })
    }
    const {
      name,
      used,
      priceInNZD,
      NZDRaised,
      image,
      notes,
      description,
      creatorCharitySlug,
    } = req.body
    const result = await db.updateItem(id, {
      name,
      image,
      used,
      priceInNZD,
      NZDRaised,
      notes,
      description,
      creatorCharitySlug,
    })
    if (!result) {
      return res.status(404).json({ errorMessage: 'Item not found' })
    }
    res.sendStatus(StatusCodes.NO_CONTENT)
  } catch (err) {
    next(err)
  }
})

// Route to delete an item by ID. NB: this won't work currently due to a FK constraint.
//Should be okay to leave alone (and ultimately delete) - can't think of a time we'd actually call this route
router.delete('/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const id = parseInt(req.params.id, 10)
    if (isNaN(id)) {
      return res.status(400).json({ errorMessage: 'Invalid item ID' })
    }
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
