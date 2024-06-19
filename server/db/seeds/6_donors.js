export async function seed(knex) {
  await knex('donors').del()

  await knex('donors').insert([
    { id: 1, email: 'test@test.com' },
    { id: 2, email: 'fakeDonor@donors.com' },
  ])
}
