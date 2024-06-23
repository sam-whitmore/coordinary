export async function seed(knex) {
  // Inserts seed entries
  await knex('registers').insert([
    {
      id: 1,
      name: 'Takitimu House',
      charity_id: 2,
      description: 'Main Charity Registry',
      active: true,
    },
    {
      id: 2,
      name: 'Coordinary',
      charity_id: 4,
      description: 'Main Charity Registry',
      active: true,
    },
    {
      id: 3,
      name: 'Greedy Greg',
      charity_id: 2,
      description: 'An absurd registry purely for testing',
      active: true,
    },
  ])
}
