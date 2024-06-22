export interface RegisterData {
  name: string
  charityId: number
}

export interface Register extends RegisterData {
  id: number
}

//for use with knex. Makes adding/updating data less prone to typos.
export interface RegisterSnakeCase {
  id?: number
  name: string
  charity_id: number
}

export interface RegisterFromSlug {
  charityId: number
  registerId: number
  registerName: string
}