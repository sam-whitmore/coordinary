export async function seed(knex) {
  await knex('charities').insert([
    { id: 1, name: 'DCM', category_id: 1, slug: 'DCM'},
    { id: 2, name: 'Takitimu House', category_id: 1, slug: 'takitimuhouse', default_register_id:1 },
    {
      id: 3,
      name: 'Wellington City Mission',
      category_id: 2,
      slug: 'wellingtoncitymission',
    },
    { id: 4, name: 'Coordinary', category_id: 2, slug: 'coordinary', default_register_id:2 },
  ])
}
