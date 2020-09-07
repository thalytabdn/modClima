exports.up = function(knex) {
    return knex.schema.createTable('farms', (table) => {
        table.string('id').primary();
        table.string('name').notNullable();
        
        table.string('fields_id')
            .references('id')
            .inTable('fields')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
}

exports.down = function(knex){
    return knex.schema.dropTable('farms');
}