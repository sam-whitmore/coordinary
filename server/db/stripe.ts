/* eslint-disable @typescript-eslint/no-explicit-any */
import db from './connection.ts'
import Stripe from 'stripe'

export async function addPayment(
  donorAuth0Id: string,
  registerId: number,
  itemId: number,
  amount: number,
  isAnonymous: boolean,
) {
  const paymentIntent = await Stripe.paymentIntents.create({
    amount,
    currency: 'nzd',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  const clientSecret = paymentIntent.client_secret

  const data = {
    register_id: registerId,
    item_id: itemId,
    anonymous: isAnonymous,
    value_in_NZD: amount,
    donor_auth0_id: donorAuth0Id,
    datetime: new Date(),
  }

  try {
    const result = await db('donations').insert(data)
    return { clientSecret, result }
  } catch (error) {
    console.error(error)
    return { error: 'Failed to create payment intent' }
  }
}
