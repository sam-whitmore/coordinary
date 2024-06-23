/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('charities_info', (table) => {
    table.integer('charity_id').references('charities.id').onDelete('CASCADE')
    table.string('vision')
    table.string('mission')
    table.string('values')
    table.string('services')
    table.string('story')
    table.string('emphatic')
    table.string('final_statement')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('charities_info')
}
