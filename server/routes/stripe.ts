import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/stripe.ts'

const router = Router()

router.post(
  '/create-payment-intent',
  checkJwt,
  async (req: JwtRequest, res, next) => {
    if (!req.auth?.sub) {
      res.sendStatus(StatusCodes.UNAUTHORIZED)
      return
    }

    try {
      const { registerId, itemId, amount, isAnonymous } = req.body
      const id = await db.addPayment({
        donorAuth0Id,
        registerId,
        itemId,
        amount,
        isAnonymous,
      })
      res
        .setHeader('Location', `${req.baseUrl}/${id}`)
        .sendStatus(StatusCodes.CREATED)
    } catch (err) {
      next(err)
    }
  },
)

export default router
