exports.up = function(knex) {
    return knex.schema.createTable('mills', (table) => {
        table.string('id').primary();
        table.string('name').notNullable();
        
        table.string('harvests_id')
            .references('id')
            .inTable('harvests')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
}

exports.down = function(knex){
    return knex.schema.dropTable('mills');
}