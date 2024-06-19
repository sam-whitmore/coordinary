import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/charities.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getAllCharities()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = number(req.params.id)
  try {
    const result = await db.getAllCharitiesById(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { owner, name } = req.body
    const id = await db.addCharities({ owner, name })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router