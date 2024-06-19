export async function seed(knex) {

  await knex('donations').del()

  await knex('donations').insert([
    { id: 1, donor_auth0_id: 'auth0|123', anonymous: true, datetime: new Date(), register_id: 1, value_in_NZD: 4.00, item_id: 3 },
    { id: 2, donor_auth0_id: 'auth0|124', anonymous: false, datetime: new Date(2024, 11, 25), register_id: 3, value_in_NZD: 10.00, item_id: 2 },
    { id: 3, donor_auth0_id: 'auth0|125', anonymous: false, datetime: new Date(), register_id: 2, value_in_NZD: 9.00, item_id: 1 },
  ])
}
