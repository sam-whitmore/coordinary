/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('donors', (table) => {
    table.integer('id').primary()
    table.string('auth0_id').unique()

    //so far not including a name etc purely due to using auth0Id as our primary identifying factor
    //probably nice to hold as little data about people as possible, unless our Product Owner disagrees

    table.string('email') //optional field, but useful for news, updates, receipts (if necessary)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('donors')
}
