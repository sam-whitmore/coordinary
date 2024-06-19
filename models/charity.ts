export interface CharityData {
  name: string
  categoryId: number
  phone: string
  email: string
  location: string
}

export interface Charity extends CharityData {
  id: number
}

//for use with knex. Makes adding/updating data less prone to typos.
export interface CharitySnakeCase {
  id?: number
  name: string
  category_id: number
  phone: string
  email: string
  location: string
}
