'use strict'

/*
|--------------------------------------------------------------------------
| 500FavoritoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Favorito = use('App/Models/Favorito')

class FavoritoSeeder {
  async run () {

    await Favorito.createMany([
      
      {id: 1, id_usuario: ''},
      {id: 2, id_usuario: ''},
      {id: 3, id_usuario: ''},
      {id: 4, id_usuario: ''},
      {id: 5, id_usuario: ''},
      {id: 6, id_usuario: ''},
    ])
  }
}

module.exports = FavoritoSeeder
