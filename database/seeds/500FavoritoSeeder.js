'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Favorito = use('App/Models/Favorito');
class FavoritoSeeder {
  async run() {
    await Favorito.createMany([
      { 
        usuario_id: 1,
        receita_id: 3
      },
      { 
        usuario_id: 3,
        receita_id: 1
      },
      { 
        usuario_id: 4,
        receita_id: 5
      },
      { 
        usuario_id: 2,
        receita_id: 8
      }
    ])
  }
}

module.exports = FavoritoSeeder;
