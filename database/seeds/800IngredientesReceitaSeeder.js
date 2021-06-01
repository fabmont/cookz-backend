'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */

const IngredientesReceita = use('App/Models/IngredientesReceita');

class IngredientesReceitaSeeder {
  async run() {
    await IngredientesReceita.createMany([
      {
        quantidade: 15,
        receita_id: 1,
        ingrediente_id: 1,
        unidade_medida_id: 5,
      },
      {
        quantidade: 15,
        receita_id: 1,
        ingrediente_id: 2,
        unidade_medida_id: 5,
      },
      {
        quantidade: 100,
        receita_id: 1,
        ingrediente_id: 3,
        unidade_medida_id: 2,
      },
      {
        quantidade: 20,
        receita_id: 1,
        ingrediente_id: 4,
        unidade_medida_id: 5,
      },
    ]);
  }
}

module.exports = IngredientesReceitaSeeder;
