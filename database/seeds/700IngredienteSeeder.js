'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Ingrediente = use('App/Models/Ingrediente');

class IngredienteSeeder {
  async run() {
    await Ingrediente.createMany([
      { nome: 'Farinha de trigo' },
      { nome: 'Leite' },
      { nome: 'Chocolate' },
      { nome: 'Fermento' },
    ]);
  }
}

module.exports = IngredienteSeeder;
