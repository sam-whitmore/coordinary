import db from './connection.ts'

export async function getAllCategories() {
  const result = await db('charity_categories').select()
  return result
}

export async function getAllCategoryById(id) {
  const result = await db('charity_categories').where({ id }).select().first()
  return result
}

export async function addCategory(data) {
  const [id] = await db('charity_categories').insert(data)
  return id
}