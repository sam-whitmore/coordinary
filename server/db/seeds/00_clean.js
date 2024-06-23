export async function seed(knex) {
  await knex('donations').del()
  await knex('registers').del()
  await knex('items').del()
  await knex('charities').del()
  await knex('charities_info').del()
  await knex('charity_categories').del()
  await knex('donors').del()
  await knex('donors_charities').del()
  await knex('registers_items').del()
}
