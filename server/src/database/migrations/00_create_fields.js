exports.up = function(knex) {
    return knex.schema.createTable('fields', (table) => {
        table.string('id').primary();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    });
}

exports.down = function(knex){
    return knex.schema.dropTable('fields');
}