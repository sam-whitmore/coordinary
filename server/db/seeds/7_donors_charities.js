export async function seed(knex) {
  await knex('donors_charities').del()

  await knex('donors_charities').insert([
    { user_id: 1, charity_id: 1 },
    { user_id: 1, charity_id: 3 },
    { user_id: 2, charity_id: 3 },
  ])
}
