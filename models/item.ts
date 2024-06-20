export interface ItemData {
  name: string
  image: File //pretty sure we need to treat this as a file, but we'll see for sure in testing!
  used: boolean
  priceInNZD: number
  NZDRaised: number
}

export interface Item extends ItemData {
  id: number
}

//for use with knex. Makes adding/updating data less prone to typos.
export interface ItemSnakeCase {
  id?: number
  name: string
  image: File
  used: boolean
  price_in_NZD: number
  NZD_raised: number
}

export interface ItemFromRegister {
  register_id: number
  items_id: number
  image: File
  new: boolean
  priceInNZD: number
  NZDRaised: number
}