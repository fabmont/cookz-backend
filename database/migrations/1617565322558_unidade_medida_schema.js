'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnidadeMedidaSchema extends Schema {
  up () {
    this.create('unidade_medidas', (table) => {
      table.increments()
      table.integer('Quantidade')
      table.integer('Receita_id').references('id').intable('receitas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('unidade_medidas')
  }
}

module.exports = UnidadeMedidaSchema
