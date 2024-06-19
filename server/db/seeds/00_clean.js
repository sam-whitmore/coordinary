export async function seed(knex) {
  await knex('donations').del()
  await knex('registers').del()
  await knex('charities').del()
  await knex('charity_categories').del()
  await knex('donors').del()
  await knex('donors_charities').del()
}
