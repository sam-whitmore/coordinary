export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('registers_items').del()

  // Inserts seed entries
  await knex('registers_items').insert([
    {register_id:1, items_id:1},
    {register_id:2, items_id:2},
    {register_id:1, items_id:3},
    {register_id:3, items_id:4}
  ])
}
