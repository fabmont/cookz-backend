'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Usuario = use('App/Models/Usuario')

class UsuarioSeeder {
  async run() {
    await Usuario.createMany([{
        id: 1,
        nome: 'Caio dos santos rodrigues',
        uf: 'df'
      },
      {
        id: 2,
        nome: 'Gabriel Rodrigues da Silva',
        uf: 'df'
      },
      {
        id: 3,
        nome: 'Fabrício Santos Monteiro',
        uf: 'df'
      },
      {
        id: 4,
        nome: 'Gustavo Ferreira',
        uf: 'df'
      },
      {
        id: 5,
        nome: 'João Victor Souza da Silva',
        uf: 'df'
      },
      {
        id: 6,
        nome: 'Judson Miller Leal Dias',
        uf: 'df'
      },
      {
        id: 7,
        nome: 'Júlia Daphiny Lins Brandão',
        uf: 'df'
      },
    ])

  }
}

module.exports = UsuarioSeeder
