export interface ItemData {
  name: string
  image: File //pretty sure we need to treat this as a file, but we'll see for sure in testing!
  new: boolean
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
  new: boolean
  price_in_NZD: number
  NZD_raised: number
}
