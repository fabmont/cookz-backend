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
      uf: 'df',
      usuarioProfissional: '0',
      email: '@iesb.edu.br',
      senha: '20114290130',
    },
    {
      id: 2,
      nome: 'Gabriel Rodrigues da Silva',
      uf: 'df',
      usuarioProfissional: '0',
      email: 'GabrielRodrigues@iesb.edu.br',
      senha: '20114290052',
    },
    {
      id: 3,
      nome: 'Fabrício Santos Monteiro',
      uf: 'df',
      usuarioProfissional: '0',
      email: 'FabrícioSantos@iesb.edu.br',
      senha: '20114290072',
    },
    {
      id: 4,
      nome: 'Gustavo Ferreira',
      uf: 'df',
      usuarioProfissional: '0',
      email: 'GustavoFerreira@iesb.edu.br',
      senha: '2011429',
    },
    {
      id: 5,
      nome: 'João Victor Souza da Silva',
      uf: 'df',
      usuarioProfissional: '0',
      email: 'JoãoVictor@iesb.edu.br',
      senha: '20114290002',
    },
    {
      id: 6,
      nome: 'Judson Miller Leal Dias',
      uf: 'df',
      usuarioProfissional: '0',
      email: 'JudsonMiller@iesb.edu.br',
      senha: '20114290022',
    },
    {
      id: 7,
      nome: 'Júlia Daphiny Lins Brandão',
      uf: 'df',
      usuarioProfissional: '0',
      email: 'JuliaDaphiny@iesb.edu.br',
      senha: '20114290029',
    },
  ])

  }
}

module.exports = UsuarioSeeder
