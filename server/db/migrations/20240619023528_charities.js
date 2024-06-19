/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('charities', (table) => {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.integer('category_id').references('charity_categories.id')
    table.string('email')
    table.string('phone')
    table.string('location')
  })
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
}

export async function down(knex) {
  return knex.schema.dropTable('charities')
}
