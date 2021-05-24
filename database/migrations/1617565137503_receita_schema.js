'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ReceitaSchema extends Schema {
  up() {
    this.create('receitas', (table) => {
      table.increments();
      table.string('nome', 30).notNullable();
      table.integer('tempo_preparo').notNullable();
      table.string('descricao', 300).notNullable();
      table.boolean('vegano').notNullable();
      table
        .integer('usuario_id')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable();
      table
        .integer('categoria_id')
        .references('id')
        .inTable('categorias')
        .unsigned()
        .notNullable();
      table
        .integer('dificuldade_id')
        .references('id')
        .inTable('dificuldades')
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
