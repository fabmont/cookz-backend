'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class IngredientesSchema extends Schema {
  up() {
    this.create('ingredientes', (table) => {
      table.increments();
      table.string('nome').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('ingredientes');
  }
}

module.exports = IngredientesSchema;
