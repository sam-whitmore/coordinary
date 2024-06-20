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

export async function getAllCharities() {
  const result = await db('charities').select(columns)
  return result
}

export async function getAllCharitiesById(id: number) {
  const result = await db('charities').where({ id }).select(columns).first()
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

export async function getAllCharitiesByDonorFollowing(id: number) {
  const result = await db('charities')
    .join('donors_charities', 'id', 'donors_charities.charity_id')
    .join('donors', 'donors_charities.donor_id', 'donors_id')
    .where({ donors_id: id })
    .select(columns)
  return result
}

export async function deleteCharitiesByDonorFollowing(
  charityid: number,
  donorid: number,
) {
  return await db('donors_charities')
    .where({ donor_id: donorid, charity_id: charityid })
    .delete()
}
