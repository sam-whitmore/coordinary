import { ItemData } from '../../models/item.ts'
import db from './connection.ts'

// Pre-define snake_case to camelCase select statements for gets??
// TODO: Change SQLite Columns for Items from New to Used
const columns = [
  'id',
  'name',
  'image',
  'used',
  'price_in_NZD as priceInNZD',
  'NZD_raised as NZDRaised',
]

const joinColumns = [
  'registers.id as register_id',
  'items.id as items_id',
  'items.image as image',
  'items.used as used',
  'items.price_in_NZD as priceInNZD',
  'items.NZD_raised as NZDRaised',
  'items.name as name'
]

// This fetches every register assigned to a charity.
export async function getItemsByRegisterId(id: number) {
  const result = await db('registers').where('registers.id', id)
    .join('registers_items', 'registers.id', 'registers_items.register_id')
    .join('items', 'items.id', 'registers_items.items_id')
    .select(joinColumns)
  return result
}

// TODO: HAVE BEGUN CREATING THIS DB FUNCTION; HAVE ALREADY CREATED EVERY FUNCTION ABOVE THIS (ABOVE BEING THE FRONT-END)
export async function addItemToRegister(item: ItemData, register_id: number) {
  const itemInput = db('items').returning('id').insert(item)
  console.log(itemInput)
  console.log(register_id)
}