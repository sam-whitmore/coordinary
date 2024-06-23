export interface ItemData {
  name: string
  image?: string //going to treat it as a URI, to a file that we manage in server/uploaded_images
  used: boolean
  priceInNZD: number
  NZDRaised: number
  notes?: string
  description: string
  creatorCharitySlug: string
}

export interface Item extends ItemData {
  id: number
  date: Date //this isn't on ItemData deliberately - it's something the server rather than user manages.
}

//for use with knex. Makes adding/updating data less prone to typos.
export interface ItemSnakeCase {
  id?: number
  name: string
  image?: string
  used: boolean
  price_in_NZD: number
  NZD_raised: number
  notes?: string
  description: string
  creator_charity_slug: string
  date?: Date
}

export interface ItemFromRegister {
  register_id: number
  items_id: number
  name: string
  image?: string
  used: boolean
  priceInNZD: number
  NZDRaised: number
  description: string
  creatorCharitySlug: string
  notes?: string
  date: Date
}
