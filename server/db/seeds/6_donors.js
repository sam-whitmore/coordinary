export async function seed(knex) {
  await knex('donors').del()

  await knex('donors').insert([{ id: 1 }, { id: 2 }])
}
