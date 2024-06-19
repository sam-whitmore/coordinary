export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('registers').del()

  // Inserts seed entries
  await knex('registers').insert([
    { id: 1, name: "Takitimu House", charity_id:2},
    { id: 2, name: 'Coordinary', charity_id:4},
    { id: 3, name: 'Greedy Greg', charity_id:2},
  ])
}
