/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('items', (table) => {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.string('image')
    table.boolean('used').notNullable()
    table.float('price_in_NZD').notNullable()
    table.float('NZD_raised').notNullable()
    table.string('description')
    table.dateTime('date')
    table.string('notes')
    table.string('creator_charity_slug') //Makes sense to use it to filter notes visibility/editing permissions
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('items')
}
