exports.up = function(knex) {
    return knex.schema.createTable('harvests', (table) => {
        table.string('id').primary();
        table.string('start_date').notNullable();
        table.string('end_date').notNullable();
        
        table.string('farms_id')
            .references('id')
            .inTable('farms')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
}

exports.down = function(knex){
    return knex.schema.dropTable('harvests');
}