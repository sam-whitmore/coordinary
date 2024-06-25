/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('charities_preferences', (table) => {
    table.integer('id').primary()
    table.integer('charity_id').references('charities.id').onDelete('CASCADE')
    table.string('slug') //lazy; for ease of loading
    table.string('primary')
    table.string('secondary')
    table.string('accent')
    table.string('text')
    table.string('background')
    table.string('lightbackground')
    table.string('hero')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('charities_preferences')
}
