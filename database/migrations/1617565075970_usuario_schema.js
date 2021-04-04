'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('Nome',30).notNullable()
      table.string('Estado',30).notNullable()
      table.string('Profissional',4).notNullable()
      table.string('Senha',15).notNullable()
      table.string('Email',62).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema
