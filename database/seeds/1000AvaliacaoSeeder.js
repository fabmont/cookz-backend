'use strict';

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
const Factory = use('Factory');

const Avaliacao = use('App/Models/Avaliacao');

class AvaliacaoSeeder {
  async run() {
    await Avaliacao.createMany([
      {
        comentario:
          'O brownie e gostoso viciante, toda vez que come um pedaço voce quer comer mais',
        nota: 10,
        usuario_id: 2,
        receita_id: 1,
      },
      {
        comentario:
          'peixe e ruim em si, a receita tenta deixar o peixe mais gostoso porem continua ruim',
        nota: 0,
        usuario_id: 2,
        receita_id: 2,
      },
      {
        comentario: 'arroz com carne e muito bom',
        nota: 7,
        usuario_id: 2,
        receita_id: 3,
      },
      {
        comentario: 'muito gostoso saboroso',
        nota: 7,
        usuario_id: 2,
        receita_id: 4,
      },
      {
        comentario: 'churros e perfeito maravilhoso',
        nota: 10,
        usuario_id: 2,
        receita_id: 6,
      },
      {
        comentario: 'muito gostoso viciante o gosto e de dar agua na boca',
        nota: 10,
        usuario_id: 2,
        receita_id: 7,
      },
    ]);
  }
}

module.exports = AvaliacaoSeeder;
