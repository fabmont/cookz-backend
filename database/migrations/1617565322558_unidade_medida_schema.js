'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UnidadeMedidaSchema extends Schema {
  up() {
    this.create('unidade_medidas', (table) => {
      table.increments();
      table.string('descricao').notNullable();
      table.string('sigla', 3).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('unidade_medidas');
  }
}

module.exports = UnidadeMedidaSchema;
