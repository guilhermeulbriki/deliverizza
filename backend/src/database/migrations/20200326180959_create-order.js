
exports.up = function (knex) {
  return knex.schema.createTable('order', function (table) {
    table.increments();
    table.string('user_id').notNullable();
    table.string('user_name').notNullable();
    table.string('sizePizza').notNullable();
    table.string('flavorsPizza').notNullable();
    table.string('flavorEdge').notNullable();
    table.string('drinks').notNullable();
    table.decimal('value').notNullable();
    table.string('address').notNullable();
    table.boolean('did').notNullable();

    table.string('pizzaria_id').notNullable();
    table.foreign('pizzaria_id').references('id').inTable('pizzaria');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('order');
};
