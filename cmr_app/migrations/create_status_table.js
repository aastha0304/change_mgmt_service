exports.up = function(knex, Promise) {
  return knex.schema.createTable('status', (table) => {
    table.increments('id').unsigned().primary();
    table.string('state').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('status');
};
