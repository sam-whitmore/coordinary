import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/stripe.ts'
import Stripe from 'stripe'
const stripe = new Stripe('sk_test_xLhH7sntJEJFllhPZwbGU0Sj')

const router = Router()

router.post(
  '/create-payment-intent',
  checkJwt,
  async (req: JwtRequest, res) => {
    if (!req.auth?.sub) {
      res.sendStatus(StatusCodes.UNAUTHORIZED)
      return
    }
    const { amount } = req.body
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'nzd',
      automatic_payment_methods: {
        enabled: true,
      },
    })
    res.send({
      clientSecret: paymentIntent.client_secret,
    })
  },
)

export default router
