import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/functions/donors.ts'

const router = Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const result = await db.getAllDonors()
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

//GET current user
router.get('/self', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const result = await db.getDonorByAuthId(req.auth.sub)
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
    const { email } = req.body

    if (!email) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email is required' })
      return
    }

    const id = await db.addDonor({ email, auth0Id: req.auth.sub })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    console.error('Error in addDonor route:', err) // Log the error details
    next(err)
  }
})

router.patch('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }
  try {
    const { email } = req.body
    //TODO:patch etc
    await db.editDonor({ email, auth0Id: req.auth.sub })
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

export default router
