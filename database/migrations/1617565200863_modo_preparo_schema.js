'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModoPreparoSchema extends Schema {
  up () {
    this.create('modo_preparos', (table) => {
      table.increments()
      table.integer('Reeceita_id').references('id').intable('receitas').unsigned().notNullable()
      table.string('Descrição',500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('modo_preparos')
  }
}

module.exports = ModoPreparoSchema
