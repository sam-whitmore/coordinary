import { DonorData, DonorSnakeCase } from '../../models/donor.ts'
import db from './connection.ts'
//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const columns = ['id', 'auth0_id']

export async function getAllDonors() {
  const result = await db('donors').select(columns)
  return result
}

export async function getAllDonorsById(id: number) {
  const result = await db('donors').where({ id }).select(columns).first()
  return result
}

export async function addCharities(data: DonorData) {
  // prevents typos when switching to snakecase
  const snakecase: DonorSnakeCase = {
    auth0_id: data.auth0Id,
  }
  const [id] = await db('donors').insert(snakecase)
  return id
}
