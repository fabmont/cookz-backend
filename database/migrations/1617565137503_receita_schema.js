'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceitaSchema extends Schema {
  up () {
    this.create('receitas', (table) => {
      table.increments()
      table.string('Nome',30).notNullable()
      table.integer('Tempo_aprox').notNullable()
      table.string('Descrição',300).notNullable()
      table.integer('Usuario_id').references('id').intable('usuarios').unsigned().notNullable()
      table.integer('Categoria_id').references('id').intable('categorias').unsigned().notNullable()
      table.integer('Dificuldade_id').references('id').intable('dificuldades').unsigned().notNullable()
      table.integer('ingredientes_id').references('id').intable('ingredientes_receitas').unsigned().notNullable()
      
      table.timestamps()
    })
  }

  down () {
    this.drop('receitas')
  }
}

module.exports = ReceitaSchema
