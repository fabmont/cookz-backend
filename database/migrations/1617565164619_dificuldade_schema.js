'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DificuldadeSchema extends Schema {
  up () {
    this.create('dificuldades', (table) => {
      table.increments()
      table.string('descrição',30).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dificuldades')
  }
}

module.exports = DificuldadeSchema
