/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('items', (table) => {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.blob('image') //a blob is a sort of catch-all... if we want users to be able to upload images, we'll need to use a blob (and probably some mild witchcraft)
    table.boolean('new').notNullable()
    table.float('price_in_NZD').notNullable()
    table.float('NZD_raised').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('items')
}
