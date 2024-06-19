export async function seed(knex){
  await knex('charities').del()
  await knex('charity_categories').del()
}