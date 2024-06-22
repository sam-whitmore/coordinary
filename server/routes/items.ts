import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { StatusCodes } from 'http-status-codes'
import * as fs from 'fs'
import * as path from 'path'
import * as db from '../db/items'

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

// Route to get a specific item by ID
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

// Route to create a new item
router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { name, image, used, priceInNZD, NZDRaised } = req.body
    const id = await db.addItem({ name, image, used, priceInNZD, NZDRaised })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

// Route to update an item by ID
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
    const { name, used, priceInNZD, NZDRaised, image, notes } = req.body
    const result = await db.updateItem(id, {
      name,
      image,
      used,
      priceInNZD,
      NZDRaised,
      notes,
    })
    if (!result) {
      return res.status(404).json({ errorMessage: 'Item not found' })
    }
    res.sendStatus(StatusCodes.NO_CONTENT)
  } catch (err) {
    next(err)
  }
})

// Route to delete an item by ID
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
