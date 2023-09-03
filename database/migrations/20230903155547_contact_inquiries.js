/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('contact_inquiries', table => {
    table.increments('id').primary();
    table.string('contact_name', 255).notNullable();
    table.string('contact_email',255).notNullable();
    table.string('contact_role',50).notNullable();
    table.text('message');
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('contact_inquiries');
};
