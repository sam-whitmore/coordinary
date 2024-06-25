import { DonationData, DonationSnakeCase } from '../../../models/donation.ts'
import db from '../connection.ts'

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

//Gets donor donations along with some data about what is being donated
export async function getDonationsByDonor(donor_id: number) {
  return await db('donations')
    .join('donors', 'donations.donor_auth0_id', 'donors.auth0_id')
    .where({ 'donors.id': donor_id })
    .join('registers', 'donations.register_id', 'registers.id')
    .join('registers_items', 'donations.item_id', 'registers_items.items_id')
    .join('items', 'registers_items.items_id', 'items.id')
    .join('charities', 'registers.charity_id', 'charities.id')
    .select(
      'donations.id as id',
      'donations.anonymous as anonymous',
      'donations.datetime as datetime',
      'donations.value_in_NZD as valueInNZD',
      'charities.name as charityName',
      'charities.slug as charitySlug',
      'registers.name as registerName',
      'items.name as itemName',
      'items.price_in_NZD as itemPriceNZD',
      'items.id as itemId',
    )
}
