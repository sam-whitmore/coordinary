import db from './connection.ts'

export async function getAllDonations() {
  const result = await db('donations').select()
  return result
}

export async function getAllDonationsById(id) {
  const result = await db('donations').where({ id }).select().first()
  return result
}

export async function addDonations(data) {
  const [id] = await db('donations').insert(data)
  return id
}