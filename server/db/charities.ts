import { CharityData, CharitySnakeCase } from '../../models/charity.ts'
import db from './connection.ts'
//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const columns = [
  'id',
  'name',
  'category_id as categoryId',
  'phone',
  'email',
  'location',
]

const columnsTest = [
  'id',
  'name',
  'category_id as categoryId'
]

export async function getAllCharities() {
  const result = await db('charities').select(columnsTest)
  return result
}

// TODO: Insert 'slug' column within the charities table within the SQLite database.

export async function getCharityBySlug(slug: string) {
  const result = await db('charities').where({ slug }).select(columns).first()
  return result
}

export async function addCharities(data: CharityData) {
  // prevents typos when switching to snakecase
  const snakecase: CharitySnakeCase = {
    name: data.name,
    category_id: data.categoryId,
    phone: data.phone,
    email: data.email,
    location: data.location,
  }
  const [id] = await db('charities').insert(snakecase)
  return id
}
