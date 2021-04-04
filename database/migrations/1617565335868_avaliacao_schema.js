'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoSchema extends Schema {
  up () {
    this.create('avaliacaos', (table) => {
      table.increments()
      table.integer('Usuario_id').references('id').intable('usuarios').unsigned().notNullable()
      table.integer('Receita_id').references('id').intable('receitas').unsigned().notNullable()
      table.string('Comentario',400).notNullable()
      table.string('Estrelinhas',1).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('avaliacaos')
  }
}

module.exports = AvaliacaoSchema
