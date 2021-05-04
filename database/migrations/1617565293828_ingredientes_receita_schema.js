'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class IngredientesReceitaSchema extends Schema {
  up() {
    this.create('ingredientes_receitas', (table) => {
      table.increments();
      table.integer('quantidade').unsigned().notNullable();
      table
        .integer('id_receita')
        .references('id')
        .inTable('ingredientes')
        .unsigned()
        .notNullable();
      table
        .integer('id_ingrediente')
        .references('id')
        .inTable('ingredientes')
        .unsigned()
        .notNullable();
      table
        .integer('id_unidade_medida')
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
