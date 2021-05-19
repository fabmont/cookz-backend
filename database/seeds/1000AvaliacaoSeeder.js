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
      {id: 1, comentario: 'O brownie e gostoso viciante, toda vez que come um pedaço voce quer comer mais',nota: 10,id_usuario:2,id_receita:1},
      {id: 2, comentario: 'peixe e ruim em si, a receita tenta deixar o peixe mais gostoso porem continua ruim',nota: 0,id_usuario:2,id_receita:2},
      {id: 3, comentario: 'arroz com carne e muito bom',nota: 7,id_usuario:2,id_receita:3},
      {id: 4, comentario: 'muito gostoso saboroso',nota: 7,id_usuario:2,id_receita:4},
      {id: 5, comentario: 'churros e perfeito maravilhoso',nota: 10,id_usuario:2,id_receita:6},
      {id: 6, comentario: 'muito gostoso viciante o gosto e de dar agua na boca',nota: 10,id_usuario:2,id_receita:7},

    ])
  }
}

module.exports = AvaliacaoSeeder
