import db from './connection.ts'

export async function getAllRegisters() {
  const result = await db('registers').select()
  return result
}

export async function getRegistersersById(id) {
  const result = await db('registers').where({ id }).select().first()
  return result
}

export async function addRegisters(data) {
  const [id] = await db('registers').insert(data)
  return id
}