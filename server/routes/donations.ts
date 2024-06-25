import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/functions/donations.ts'
import * as itemsDB from '../db/functions/items.ts'

const router = Router()

// router.get('/', async (req, res) => {
//   try {
//     const result = await db.getAllDonations()
//     res.json(result)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ errorMessage: 'Something went wrong' })
//   }
// })

router.get('/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }
  try {
    const result = await db.getDonationById(Number(req.params.id))
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

//GET /donor/:id - returns DonationWithJoinedData[] for a given donor
router.get('/donor/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }
  try {
    const result = await db.getDonationsByDonor(Number(req.params.id))
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
    next(error)
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
    await itemsDB.donateTowardsItem(itemId, valueInNZD)

    await res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
