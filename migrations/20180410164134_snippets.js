exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('snippets', function(table) {
      table.increments('id').primary();
      table.string('snippet');
      table.string('name');
      table.dateTime('created');
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('snippets'),
  ]);
};