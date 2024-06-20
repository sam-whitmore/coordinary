import { ItemData, ItemSnakeCase } from '../../models/item'
import db from './connection'

// Pre-define snake_case to camelCase select statements for gets??
// TODO: Change SQLite Columns for Items from New to Used
const columns = [
  'id',
  'name',
  'image',
  'new',
  'price_in_NZD as priceInNZD',
  'NZD_raised as NZDRaised',
]

// Function to get all items
export async function getAllItems() {
  const result = await db('items').select(columns)
  return result
}

// Function to get a specific item by ID
export async function getItemById(id: number) {
  const result = await db('items').where({ id }).select(columns).first()
  return result
}

// Function to add a new item
export async function addItem(data: Omit<ItemData, 'id'>) {
  // Prevents typos when switching to snake_case
  const snakeCase: ItemSnakeCase = {
    name: data.name,
    image: data.image,
    used: data.used,
    price_in_NZD: data.priceInNZD,
    NZD_raised: data.NZDRaised,
  }
  const [id] = await db('items').insert(snakeCase)
  return id
}

// Function to update an item by ID
export async function updateItem(id: number, data: ItemData) {
  const snakeCase: ItemSnakeCase = {
    name: data.name,
    image: data.image,
    used: data.used,
    price_in_NZD: data.priceInNZD,
    NZD_raised: data.NZDRaised,
  }
  const result = await db('items').where({ id }).update(snakeCase)
  return result
}

// Function to delete an item by ID
export async function deleteItem(id: number) {
  const result = await db('items').where({ id }).del()
  return result
}
