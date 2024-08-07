import { ItemData, ItemSnakeCase } from '../../../models/item'
import db from '../connection'

// Pre-define snake_case to camelCase select statements for gets??
// TODO: Change SQLite Columns for Items from New to Used
const columns = [
  'id',
  'name',
  'image',
  'used',
  'price_in_NZD as priceInNZD',
  'NZD_raised as NZDRaised',
  'notes',
  'date',
  'description',
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
export async function addItem(data: ItemData) {
  // Prevents typos when switching to snake_case
  const snakeCase: ItemSnakeCase = {
    name: data.name,
    image: data.image,
    used: data.used,
    price_in_NZD: data.priceInNZD,
    NZD_raised: data.NZDRaised,
    description: data.description,
    creator_charity_slug: data.creatorCharitySlug,
    date: new Date(),
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
    price_in_NZD: Number(data.priceInNZD),
    NZD_raised: data.NZDRaised,
    notes: data.notes,
    description: data.description,
    creator_charity_slug: data.creatorCharitySlug,
  }
  const result = await db('items').where({ id }).update(snakeCase)
  return result
}

//Seemed worth making its own function for laziness
export async function donateTowardsItem(id: number, data: number) {
  const item = (await getItemById(id)) as ItemData
  // console.log(item)
  item.NZDRaised += data
  return await db('items').where({ id }).update({ NZD_raised: item.NZDRaised })
}

// Function to delete an item by ID
export async function deleteItem(id: number) {
  console.log(id)
  const result = await db('items').where({ id }).delete()
  return result
}

export async function addItemToRegister(item: ItemData, register_id: number) {
  const id = await addItem(item)
  return await db('registers_items').insert({
    register_id: register_id,
    items_id: id,
  })
}
