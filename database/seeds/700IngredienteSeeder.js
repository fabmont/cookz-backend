'use strict'

/*
|--------------------------------------------------------------------------
| 700IngredienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Ingrediente = use('App/Models/Ingrediente')


class IngredienteSeeder {
  async run () {

    await Ingrediente.createMany([
      {id: 1, nome: ''},
      {id: 2, nome: ''},
      {id: 3, nome: ''},
      {id: 4, nome: ''},
      {id: 5, nome: ''},
      {id: 6, nome: ''},
    ])
  }
}

module.exports = IngredienteSeeder
