'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AvaliacaoSchema extends Schema {
  up() {
    this.create('avaliacoes', (table) => {
      table.increments();
      table.string('comentario').notNullable();
      table.integer('nota').notNullable();
      table
        .integer('usuario_id')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable();
      table
        .integer('receita_id')
        .references('id')
        .inTable('receitas')
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('avaliacoes');
  }
}

module.exports = AvaliacaoSchema;
