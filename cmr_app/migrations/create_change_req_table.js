//uniqueness constraint for
exports.up = function(knex, Promise) {
  return knex.schema.createTable('change_mgmt_req', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('app_id').unsigned().references('application.id');
    table.string('version').notNull();
    table.string('env');
    table.string('notes');
    table.integer('status_id').unsigned().references('status.id');
    table.string('createdBy');
    table.timestamps(false, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('change_mgmt_req');
};
