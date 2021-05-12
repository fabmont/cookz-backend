'use strict'

/*
|--------------------------------------------------------------------------
| 1000AvaliacaoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Avaliacao = use('App/Models/Avaliacao')

class AvaliacaoSeeder {
  async run () {

    await Avaliacao.createMany([
      {id: 1, comentario: '',nota: ''},
      {id: 2, comentario: '',nota: ''},
      {id: 3, comentario: '',nota: ''},
      {id: 4, comentario: '',nota: ''},
      {id: 5, comentario: '',nota: ''},
      {id: 6, comentario: '',nota: ''},

    ])
  }
}

module.exports = AvaliacaoSeeder
