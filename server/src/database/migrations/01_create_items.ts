import Knex from 'knex';

export async function up(knex: Knex){
    // Criar a tabela
    return knex.schema.createTable('items', table => {
        
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('titulo').notNullable();

    });
}
export async function down(knex: Knex){
    // Método usado para voltar no tempo (deletar a tabela caso dê merda)
    return knex.schema.dropTable('items')
}