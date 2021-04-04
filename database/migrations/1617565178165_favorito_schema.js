'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoritoSchema extends Schema {
  up () {
    this.create('favoritos', (table) => {
      table.integer('Usuario_id').references('id').intable('usuarios').unsigned().notNullable()
      table.integer('Receita_id').references('id').intable('receitas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('favoritos')
  }
}

module.exports = FavoritoSchema
