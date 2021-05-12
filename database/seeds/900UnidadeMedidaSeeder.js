'use strict'

/*
|--------------------------------------------------------------------------
| 900UnidadeMedidaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const UnidadeMedida = use('App/Models/UnidadeMedida')


class UnidadeMedidaSeeder {
  async run () {

    await UnidadeMedida.createMany([
      {id: 1, descricao: '',sigla: ''},
      {id: 2, descricao: '',sigla: ''},
      {id: 3, descricao: '',sigla: ''},
      {id: 4, descricao: '',sigla: ''},
      {id: 5, descricao: '',sigla: ''},
      {id: 6, descricao: '',sigla: ''},
    ])
  }
}

module.exports = UnidadeMedidaSeeder
