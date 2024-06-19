export async function seed(knex) {

  await knex('charity_categories').del()

  await knex('charity_categories').insert([
    {id:1, category:"Children"},
    {id:2, category:"Food"},
    {id:3, category:"Housing"},
    {id:4, category:"Pets"}
  
  ])
}
