/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('registers_items', (table) => {
    table.integer('register_id').references('registers.id').onDelete('CASCADE')
    table.integer('items_id').references('items.id').onDelete('CASCADE')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('registers_items')
}
