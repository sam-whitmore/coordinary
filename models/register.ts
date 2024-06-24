export interface RegisterData {
  name: string
  charityId: number
  description: string
  active: boolean
}

export interface Register extends RegisterData {
  id: number
}

//for use with knex. Makes adding/updating data less prone to typos.
export interface RegisterSnakeCase {
  id?: number
  name: string
  charity_id: number
  description: string
  active: boolean
}

export interface RegisterFromSlug {
  charityId: number
  registerId: number
  name: string
  description: string
  active: boolean
  charityDefaultId: number
}
