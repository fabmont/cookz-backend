'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IngredientesReceitaSchema extends Schema {
  up () {
    this.create('ingredientes_receitas', (table) => {
      table.increments()
      table.integer('Ingredientes_id').references('id').intable('ingredientes').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ingredientes_receitas')
  }
}

module.exports = IngredientesReceitaSchema
