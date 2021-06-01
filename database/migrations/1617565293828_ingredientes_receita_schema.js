'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class IngredientesReceitaSchema extends Schema {
  up() {
    this.create('ingredientes_receitas', (table) => {
      table.increments();
      table.integer('quantidade').unsigned().notNullable();
      table
        .integer('receita_id')
        .references('id')
        .inTable('receitas')
        .unsigned()
        .notNullable();
      table
        .integer('ingrediente_id')
        .references('id')
        .inTable('ingredientes')
        .unsigned()
        .notNullable();
      table
        .integer('unidade_medida_id')
        .references('id')
        .inTable('unidade_medidas')
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('ingredientes_receitas');
  }
}

module.exports = IngredientesReceitaSchema;
