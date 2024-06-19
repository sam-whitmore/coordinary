export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('items').del()

  // Inserts seed entries
  await knex('items').insert([
    { id: 1, name: "Kid's Shoes",  image:null, new:true, price_in_NZD:30.00, NZD_raised:0},
    { id: 2, name: 'Server Fees', image:null, new:true, price_in_NZD:100.00, NZD_raised:3.50 },
    { id: 3, name: "Crate of Beans", image:null, new:false, price_in_NZD:20.00, NZD_raised:19.99 },
    { id: 4, name: "A really nice watch", image:null, new:false, price_in_NZD:7000.00, NZD_raised:100.00 },
  ])
}
