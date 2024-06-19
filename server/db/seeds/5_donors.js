export async function seed(knex) {
  await knex('donors').insert([
    { id: 1, email: 'test@test.com', auth0_id: 'auth0|123' },
    { id: 2, email: 'fakeDonor@donors.com', auth0_id: 'auth0|124' },
  ])
}
