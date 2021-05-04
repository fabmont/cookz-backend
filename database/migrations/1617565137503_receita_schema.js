'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ReceitaSchema extends Schema {
  up() {
    this.create('receitas', (table) => {
      table.increments();
      table.string('nome', 30).notNullable();
      table.integer('tempo_aprox').notNullable();
      table.string('descrição', 300).notNullable();
      table
        .integer('id_usuario')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable();
      table
        .integer('id_categoria')
        .references('id')
        .inTable('categorias')
        .unsigned()
        .notNullable();
      table
        .integer('id_dificuldade')
        .references('id')
        .inTable('dificuldades')
        .unsigned()
        .notNullable();
      table
        .integer('id_ingredientes')
        .references('id')
        .inTable('ingredientes_receitas')
        .unsigned()
        .notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('receitas');
  }
}

module.exports = ReceitaSchema;
