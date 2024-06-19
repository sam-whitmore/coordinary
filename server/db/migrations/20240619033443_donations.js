/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
return knex.schema.createTable('donations', (table) => {
  table.integer('id').primary()
  table.string('donor_auth0_id').notNullable()
  table.boolean('anonymous').notNullable()
  table.datetime('datetime').notNullable()
  table.integer('register_id').references('registers.id')
  table.float('value_in_NZD').notNullable()
  table.integer('item_id').references('items.id')
})
  
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
return knex.schema.dropTable('donations')  
};
