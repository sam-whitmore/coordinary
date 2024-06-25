import {
  CharityCategoryData,
  CharityCategorySnakeCase,
} from '../../../models/charityCategory.ts'
import db from '../connection.ts'

//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const columns = ['id', 'category']

export async function getAllCategories() {
  const result = await db('charity_categories').select(columns)
  return result
}

export async function getCategoryById(id: number) {
  const result = await db('charity_categories')
    .where({ id })
    .select(columns)
    .first()
  return result
}

export async function addCategory(data: CharityCategoryData) {
  // prevents typos when switching to snakecase
  const snakeCase: CharityCategorySnakeCase = {
    category: data.category,
  }
  const [id] = await db('charity_categories').insert(snakeCase)
  return id
}
