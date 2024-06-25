export async function seed(knex) {
  await knex('charities_preferences').insert([
    {
      id: 1,
      charity_id: 2,
      slug: 'takitimuhouse',
      primary: '#0c2846',
      accent: '#59be8c',
      secondary: '#f99d1c',
      text: '#0c2846',
      background: '#ffffff',
      lightbackground: '#ffffff',
      hero: 'w1920.jpg',
    },
  ])
}
