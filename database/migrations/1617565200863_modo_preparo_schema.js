'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ModoPreparoSchema extends Schema {
  up() {
    this.create('modo_preparos', (table) => {
      table.increments();
      table.string('descricao').notNullable();
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
    this.drop('modo_preparos');
  }
}

module.exports = ModoPreparoSchema;
