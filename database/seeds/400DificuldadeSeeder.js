'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Dificuldade = use('App/Models/Dificuldade');

class DificuldadeSeeder {
  async run() {
    await Dificuldade.createMany([
      { descricao: 'Fácil' },
      { descricao: 'Médio' },
      { descricao: 'Difícil' },
      { descricao: 'Profissional' },
    ]);
  }
}

module.exports = DificuldadeSeeder;
