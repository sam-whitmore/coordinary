/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('donors_charities', (table) => {
    table.integer('donor_id').references('donors.id').onDelete('CASCADE')
    table.integer('charity_id').references('donors.id').onDelete('CASCADE')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('donors_charities')
}
