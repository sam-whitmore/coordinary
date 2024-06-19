export interface CharityCategoryData {
  category: string
}

export interface CharityCategory extends CharityCategoryData {
  id: number
}
//for use with knex. Makes adding/updating data less prone to typos.
export interface CharityCategorySnakeCase {
  id?: number
  category: string
}
