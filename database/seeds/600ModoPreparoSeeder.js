'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */

const ModoPreparo = use('App/Models/ModoPreparo');

class ModoPreparoSeeder {
  async run() {
    await ModoPreparo.createMany([
      {
        descricao:
          '1 - Tempere o peixe com sal e pimenta-do-reino e deixe pegar gosto por duas horas na geladeira,',
        receita_id: 2,
      },
      {
        descricao:
          '2 - Em uma frigideira antiaderente (de preferência com tampa), coloque um fio de azeite e frite o peixe,',
        receita_id: 2,
      },
      {
        descricao:
          '3 - Em outra frigideira, coloque as bananas partidas ao meio no sentido do comprimento e doure-as com a margarina. Reserve, ',
        receita_id: 2,
      },
      {
        descricao:
          '4 - Em uma forma refratária, monte da seguinte forma: uma camada de peixe, uma camada de banana, uma camada de queijo e repita novamente,',
        receita_id: 2,
      },
      {
        descricao:
          '5 - Polvilhe com canela e levemente com açúcar. Leve ao forno a 220 graus. Espere o queijo derreter e sirva imediatamente.',
        receita_id: 2,
      },
    ]);
  }
}

module.exports = ModoPreparoSeeder;
