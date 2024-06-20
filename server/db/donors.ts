import { DonorData, DonorSnakeCase } from '../../models/donor.ts'
import db from './connection.ts'
//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const columns = ['id', 'auth0_id', 'email']

export async function getAllDonors() {
  const result = await db('donors').select(columns)
  return result
}

export async function getDonorByAuthId(auth0Id: string) {
  const result = await db('donors')
    .where({ auth0_id: auth0Id })
    .select(columns)
    .first()
  return result
}

export async function addDonor(data: DonorData) {
  // prevents typos when switching to snakecase
  const snakecase: DonorSnakeCase = {
    auth0_id: data.auth0Id,
    email: data.email,
  }
  const [id] = await db('donors').insert(snakecase)
  return id
}

export async function getDonorWithDonations(auth0_id: string) {
  return await db('donors')
    .join('donations', 'auth0_id', 'donations.donor_auth0_id')
    .where({ auth0_id })
    .select(
      columns,
      'donations.id as donation_id',
      'donations.anonymous as anonymous',
      'donations.datetime as datetime',
      'donations.register_id as register_id',
      'donations.value_in_NZD as donation_value_in_NZD',
      'donations.item_id as donation_item_id',
    )
}
