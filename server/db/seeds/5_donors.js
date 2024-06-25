export async function seed(knex) {
  await knex('donors').insert([
    {
      id: 1,
      email: 'test@test.com',
      auth0_id: 'google-oauth2|109785049374122376194',
    },
    { id: 2, email: 'fakeDonor@donors.com', auth0_id: 'auth0|124' },
    {
      id: 3,
      email: 'admin@admin.com',
      auth0_id: 'auth0|667a1fa5f38dc86c60a599f2',
    },
  ])
}
