
exports.up = function (knex) {
  return knex.schema.createTable('pizzaria', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('whatsapp').notNullable();
    table.string('queue').notNullable();
    table.text('pizzaSize').notNullable();
    table.string('flavorsPizza').notNullable();
    table.string('flavorsEdge').notNullable();
    table.text('drinks').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('pizzaria');
};
