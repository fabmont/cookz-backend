'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class FavoritoSchema extends Schema {
  up() {
    this.create('favoritos', (table) => {
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
    this.drop('favoritos');
  }
}

module.exports = FavoritoSchema;
