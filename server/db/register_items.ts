import db from './connection.ts'

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

const joinColumns = [
  'registers.id as register_id',
  'items.id as items_id',
  'items.name as name',
  'items.image as image',
  'items.new as new',
  'items.price_in_NZD as priceInNZD',
  'items.NZD_raised as NZDRaised',
]

// This fetches every register assigned to a charity.
export async function getItemsByRegisterId(id: number) {
  const result = await db('registers').where('registers.id', id)
    .join('registers_items', 'registers.id', 'registers_items.register_id')
    .join('items', 'items.id', 'registers_items.items_id')
    .select(joinColumns)
  return result
}
