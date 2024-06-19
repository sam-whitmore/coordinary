export async function seed(knex) {
  await knex('donors_charities').del()

  await knex('donors_charities').insert([
    { donor_id: 1, charity_id: 1 },
    { donor_id: 1, charity_id: 3 },
    { donor_id: 2, charity_id: 3 },
  ])
}
