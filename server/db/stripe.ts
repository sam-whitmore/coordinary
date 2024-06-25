/* eslint-disable @typescript-eslint/no-explicit-any */
import db from './connection.ts'
import Stripe from 'stripe'

export async function addPayment(
  donorAuth0Id: string,
  registerId: number,
  itemId: number,
  dollarAmount: number,
  isAnonymous: boolean,
) {
  const stripe = new Stripe('sk_test_XIo4S8ykEARZgyJiA4EHLIgZ', {
    apiVersion: '2024-04-10',
  })

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
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
    value_in_NZD: dollarAmount,
    donor_auth0_id: donorAuth0Id,
    datetime: new Date(),
  }

  try {
    // const result = await db('donations').insert(data)
    return { clientSecret }
  } catch (error) {
    console.error(error)
    return { error: 'Failed to insert donation' }
  }
}
