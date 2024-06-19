export async function seed(knex) {
  // Inserts seed entries
  await knex('items').insert([
    {
      id: 1,
      name: "Kid's Shoes",
      image: null,
      used: false,
      price_in_NZD: 30.0,
      NZD_raised: 0,
    },
    {
      id: 2,
      name: 'Server Fees',
      image: null,
      used: false,
      price_in_NZD: 100.0,
      NZD_raised: 3.5,
    },
    {
      id: 3,
      name: 'Crate of Beans',
      image: null,
      used: true,
      price_in_NZD: 20.0,
      NZD_raised: 19.99,
    },
    {
      id: 4,
      name: 'A really nice watch',
      image: null,
      used: false,
      price_in_NZD: 7000.0,
      NZD_raised: 100.0,
    },
  ])
}
