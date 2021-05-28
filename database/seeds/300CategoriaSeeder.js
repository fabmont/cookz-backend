'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Categoria = use('App/Models/Categoria');

class CategoriaSeeder {
  async run() {
    await Categoria.createMany([
      { descricao: 'Entrada' },
      { descricao: 'Guarnição' },
      { descricao: 'Prato principal' },
      { descricao: 'Sobremesa' },
    ]);
  }
}

module.exports = CategoriaSeeder;
