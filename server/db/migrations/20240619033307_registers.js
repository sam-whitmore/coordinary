/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('registers', (table) => {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.integer('charity_id').references('charities.id')
    table.string('description')
    table.boolean('active') //whether the register is active or deactivated. Probably unwise to ever delete a register, but this is a way to no longer show a register to a user
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('registers')
}
