'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UsuarioSchema extends Schema {
  up() {
    this.create('usuarios', (table) => {
      table.increments();
      table.string('nome', 30).notNullable();
      table.string('uf', 2).notNullable();
      table.boolean('usuarioProfissional').notNullable();
      table.string('email', 254).notNullable().unique();
      table.string('senha', 254).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('usuarios');
  }
}

module.exports = UsuarioSchema;
