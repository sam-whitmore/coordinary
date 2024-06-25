import { Router } from 'express'
import * as db from '../db/functions/register_items'
import * as itemDB from '../db/functions/items'
import checkJwt, { JwtRequest } from '../auth0'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ errorMessage: 'Invalid Register ID' })
    }
    const result = await db.getItemsByRegisterId(id)
    if (!result) {
      return res.status(404).json({ errorMessage: 'Register Not Found' })
    }
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

router.post('/:id', checkJwt, async (req: JwtRequest, res) => {
  const sub = req.auth?.sub
  const item = req.body
  if (!sub) {
    res.sendStatus(401)
  }
  try {
    const result = await itemDB.addItemToRegister(item, Number(req.params.id))
    res.json(result)
  } catch (error) {
    console.error(`Error: ${error}`)
    res
      .status(500)
      .json({ error: 'Server-side Routing Failed to Add Item to Register' })
  }
})

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
    const result = await db.removeItemFromRegister(id)
    if (!result) {
      return res.status(404).json({ errorMessage: 'Item not found' })
    }
    res.sendStatus(StatusCodes.NO_CONTENT)
  } catch (err) {
    next(err)
  }
})

export default router
