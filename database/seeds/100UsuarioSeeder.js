'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Usuario = use('App/Models/Usuario');

class UsuarioSeeder {
  async run() {
    await Usuario.createMany([
      {
        nome: 'Caio dos santos rodrigues',
        uf: 'df',
        usuarioProfissional: false,
        email: '@iesb.edu.br',
        senha: '20114290130',
      },
      {
        nome: 'Gabriel Rodrigues da Silva',
        uf: 'df',
        usuarioProfissional: false,
        email: 'GabrielRodrigues@iesb.edu.br',
        senha: '20114290052',
      },
      {
        id: 3,
        nome: 'Fabrício Santos Monteiro',
        uf: 'df',
        usuarioProfissional: false,
        email: 'FabrícioSantos@iesb.edu.br',
        senha: '20114290072',
      },
      {
        nome: 'Gustavo Ferreira',
        uf: 'df',
        usuarioProfissional: false,
        email: 'GustavoFerreira@iesb.edu.br',
        senha: '2011429',
      },
      {
        nome: 'João Victor Souza da Silva',
        uf: 'df',
        usuarioProfissional: false,
        email: 'JoãoVictor@iesb.edu.br',
        senha: '20114290002',
      },
      {
        nome: 'Judson Miller Leal Dias',
        uf: 'df',
        usuarioProfissional: false,
        email: 'JudsonMiller@iesb.edu.br',
        senha: '20114290022',
      },
      {
        nome: 'Júlia Daphiny Lins Brandão',
        uf: 'df',
        usuarioProfissional: false,
        email: 'JuliaDaphiny@iesb.edu.br',
        senha: '20114290029',
      },
    ]);
  }
}

module.exports = UsuarioSeeder;
