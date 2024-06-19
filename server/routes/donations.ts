import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/donations.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getAllDonations()
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const result = await db.getDonationById(Number(req.params.id))
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const {
      donorAuth0Id,
      itemId,
      registerId,
      anonymous,
      datetime,
      valueInNZD,
    } = req.body
    const id = await db.addDonation({
      donorAuth0Id,
      itemId,
      registerId,
      anonymous,
      datetime,
      valueInNZD,
    })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router