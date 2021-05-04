'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AvaliacaoSchema extends Schema {
  up() {
    this.create('avaliacaos', (table) => {
      table.increments();
      table.string('comentario').notNullable();
      table.integer('nota').notNullable();
      table
        .integer('id_usuario')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable();
      table
        .integer('id_receita')
        .references('id')
        .inTable('receitas')
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('avaliacaos');
  }
}

module.exports = AvaliacaoSchema;
