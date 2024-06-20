export interface DonationData {
  donorAuth0Id: string
  itemId: number
  registerId: number

  anonymous: boolean
  datetime: Date
  valueInNZD: number
}

export interface Donation extends DonationData {
  id: number
}

//for use with knex. Makes adding/updating data less prone to typos.
export interface DonationSnakeCase {
  id?: number
  donor_auth0_id: string
  item_id: number
  register_id: number
  anonymous: boolean
  datetime: Date
  value_in_NZD: number
}

//for sane typing of donations coming up (with item/charity/register data joined)
export interface DonationWithJoinedData {
  id: number
  anonymous: boolean
  datetime: Date
  valueInNZD: number
  charityName: string
  charitySlug: string
  registerName: string
  itemName: string
  itemPriceNZD: number
  itemID: number
}
