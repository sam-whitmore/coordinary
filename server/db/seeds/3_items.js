export async function seed(knex) {
  // Inserts seed entries
  await knex('items').insert([
    {
      id: 1,
      name: "Kid's Shoes",
      image: 'kidsshoes.png',
      used: false,
      price_in_NZD: 30.0,
      NZD_raised: 0,
      description: 'Perfect for keeping little feet clean and dry',
    },
    {
      id: 2,
      name: 'Server Fees',
      image: 'server.png',
      used: false,
      price_in_NZD: 100.0,
      NZD_raised: 3.5,
      description:
        "Hosting costs aren't free! Contributing to our operational expenses helps Coordinary keep the lights on.",
    },
    {
      id: 3,
      name: 'Crate of Beans',
      image: 'beans.png',
      used: true,
      price_in_NZD: 20.0,
      NZD_raised: 19.99,
      description: 'A delicious crate of beans, lightly used.',
    },
    {
      id: 4,
      name: 'A really nice watch',
      image: 'rolex.png',
      used: false,
      price_in_NZD: 7000.0,
      NZD_raised: 100.0,
      description:
        "He's already got a couple, but apparently he really needs this one too",
    },
    {
      id: 5,
      name: 'A second really nice watch',
      image: 'rolex.png',
      used: false,
      price_in_NZD: 6000.0,
      NZD_raised: 101.52,
      description: 'If Greedy Greg is getting watches, maybe we need one?',
    },
  ])
}
