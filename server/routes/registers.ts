import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/functions/registers.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getAllRegisters()
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

router.get('/:charitySlug', async (req, res) => {
  try {
    const result = await db.getRegistersByCharitySlug(req.params.charitySlug)
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

router.get('/id/:id', async (req, res) => {
  try {
    const result = await db.getRegister(Number(req.params.id))
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { name, charityId, description, active } = req.body
    const id = await db.addRegister({ name, charityId, description, active })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }
  try {
    const { id } = req.params
    const { name, charityId, description, active } = req.body
    await db.editRegister(Number(id), { name, charityId, description, active })
    res.sendStatus(StatusCodes.ACCEPTED)
  } catch (e) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    next(e)
  }
})

export default router
