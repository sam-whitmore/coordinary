import db from './connection.ts'

export async function getAllCharities() {
  const result = await db('charities').select()
  return result
}

export async function getAllCharitiesById(id) {
  const result = await db('charities').where({ id }).select().first()
  return result
}

export async function addCharities(data) {
  const [id] = await db('charities').insert(data)
  return id
}