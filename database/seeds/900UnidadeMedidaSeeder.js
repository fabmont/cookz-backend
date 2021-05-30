'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */

const UnidadeMedida = use('App/Models/UnidadeMedida');

class UnidadeMedidaSeeder {
  async run() {
    await UnidadeMedida.createMany([
      { descricao: 'Miligrama', sigla: 'mg' },
      { descricao: 'Grama', sigla: 'g' },
      { descricao: 'Kilograma', sigla: 'kg' },
      { descricao: 'Tonelada', sigla: 't' },
      { descricao: 'Mililitro', sigla: 'ml' },
      { descricao: 'Litro', sigla: 'l' },
    ]);
  }
}

module.exports = UnidadeMedidaSeeder;
