import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/charityCategories.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getAllCategories()
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const result = await db.getCategoryById(req.params.id)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { owner, name } = req.body
    const id = await db.addCategory({ owner, name })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
