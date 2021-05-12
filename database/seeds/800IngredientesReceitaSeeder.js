'use strict'

/*
|--------------------------------------------------------------------------
| 800IngredientesReceitaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const IngredientesReceita = use('App/Models/IngredientesReceita')


class IngredientesReceitaSeeder {
  async run () {

    await IngredientesReceita.createMany([
      {id: 1, quantidade: ''},
      {id: 2, quantidade: ''},
      {id: 3, quantidade: ''},
      {id: 4, quantidade: ''},
      {id: 5, quantidade: ''},
      {id: 6, quantidade: ''},
    ])
  }
}

module.exports = IngredientesReceitaSeeder
