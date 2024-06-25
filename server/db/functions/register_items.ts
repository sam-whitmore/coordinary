import db from '../connection.ts'

const joinColumns = [
  'registers.id as register_id',
  'items.id as items_id',
  'items.name as name',
  'items.image as image',
  'items.used as used',
  'items.price_in_NZD as priceInNZD',
  'items.NZD_raised as NZDRaised',
  'items.name as name',
  'items.notes as notes',
  'registers.active as registers.active',
  'items.description as description',
  'items.date as date',
]

// This fetches every active register assigned to a charity.
export async function getItemsByRegisterId(id: number) {
  const result = await db('registers')
    .where({ 'registers.id': id, active: true })
    .join('registers_items', 'registers.id', 'registers_items.register_id')
    .join('items', 'items.id', 'registers_items.items_id')
    .select(joinColumns)
  return result
}

export async function addRegisterItem(itemId: number, registerId: number) {
  await db('registers_items').insert({
    items_id: itemId,
    register_id: registerId,
  })
}

export async function removeItemFromRegister(itemId: number) {
  return await db('registers_items').delete().where({ items_id: itemId })
}
