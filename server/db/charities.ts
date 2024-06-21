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
  'slug',
]

const columnsTest = ['id', 'name', 'category_id as categoryId']

export async function getAllCharities() {
  const result = await db('charities').select(columnsTest)
  return result
}

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
    slug: data.slug,
  }
  const [id] = await db('charities').insert(snakecase)
  return id
}

export async function getAllCharitiesByDonorFollowing(id: number) {
  const result = await db('charities')
    .join('donors_charities', 'charities.id', 'donors_charities.charity_id')
    .join('donors', 'donors_charities.donor_id', 'donors.id')
    .select(
      'charities.id as id',
      'charities.name as name',
      'charities.category_id as categoryId',
      'charities.phone as phone',
      'charities.email as email',
      'charities.location as location',
      'charities.slug as slug',
      'donors.id as donor_id',
    )
    .where({ donor_id: id })

  return result
}

export async function deleteCharitiesByDonorFollowing(
  charityid: number,
  donorid: number,
) {
  return await db('donors_charities')
    .where({ donor_id: donorid, charity_id: charityid })
    .first()
    .delete()
}
