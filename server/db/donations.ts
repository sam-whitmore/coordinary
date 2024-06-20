import { DonationData, DonationSnakeCase } from '../../models/donation.ts'
import db from './connection.ts'

//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const columns = [
  'id',
  'donor_auth0_id as donorAuth0Id',
  'item_id as itemId',
  'register_id as registerId',
  'anonymous',
  'datetime',
  'value_in_NZD as valueInNZD',
]

export async function getAllDonations() {
  const result = await db('donations').select(columns)
  return result
}

export async function getDonationById(id: number) {
  const result = await db('donations').where({ id }).select(columns).first()
  return result
}

export async function addDonation(data: DonationData) {
  // prevents typos when switching to snakecase
  const snakecase: DonationSnakeCase = {
    donor_auth0_id: data.donorAuth0Id,
    item_id: data.itemId,
    register_id: data.registerId,
    anonymous: data.anonymous,
    datetime: data.datetime,
    value_in_NZD: data.valueInNZD,
  }
  const [id] = await db('donations').insert(snakecase)
  return id
}

// export async function Donor(auth0_id: string){
// const result = await db('donors')
//  .join('donations', 'auth0_id', 'donations.donor_auth0_id')
//  .where({ auth0_id})
//  .select(
//       columns,
// 'donations.anonymous as anonymous',
// 'donations.datetime as datetime',
// 'donations.register_id as register_id',
// 'donations.value_in_NZD as donation_value_in_NZD',
// 'donations.item_id as donation_item_id',
//        )
//    return result

// }
