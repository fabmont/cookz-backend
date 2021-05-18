'use strict'

/*
|--------------------------------------------------------------------------
| 300CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Categoria = use('App/Models/Categoria')

class CategoriaSeeder {
  async run () {

    await Categoria.createMany([
      
      {id: 1, descricao: 'almoço ou janta'},
      {id: 2, descricao: 'sobremesa'},
      {id: 3, descricao: 'café da manha ou lanche'},
      {id: 5, descricao: 'salada'},
    ])
  }
}

module.exports = CategoriaSeeder
