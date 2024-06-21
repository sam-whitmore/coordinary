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
    table.string('slug').unique()
    table.string('auth0_id')
    table.integer('default_register_id') //the default register that a charity will show
  })
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
}

export async function down(knex) {
  return knex.schema.dropTable('charities')
}
