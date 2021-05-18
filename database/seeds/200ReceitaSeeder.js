'use strict'

/*
|--------------------------------------------------------------------------
| 200ReceitaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Receita = use('App/Models/Receita')


class ReceitaSeeder {
  async run() {
    await Receita.createMany([ 
{
  nome: 'Brownie de Chocolate com Gengibre', 
  tempo_aprox: 75, 
  descrição: '',
  id_usuario: 2, 
  id_categoria: 2, 
  id_dificuldade: 1,
  id_ingredientes: x
},
{

  nome: 'Peixe Delícia de Olinda',
  tempo_aprox: 50,
  descrição: '',
  id_usuario: 1,
  id_categoria: 1,
  id_dificuldade: 2,
  id_ingredientes:y

},

{

  nome: 'Rosbife',
  tempo_aprox: 60,
  descrição: '',
  id_usuario: 7,
  id_categoria: 1,
  id_dificuldade: 4,
  id_ingredientes:y

},  

{

  nome: 'Pão Árabe de Micro-ondas',
  tempo_aprox: 30,
  descrição: '',
  id_usuario: 5,
  id_categoria: 3,
  id_dificuldade: 1,
  id_ingredientes:y

},  

{

  nome: 'Vinagrete de Polvo com Torradas Aromáticas',
  tempo_aprox: 45,
  descrição: '',
  id_usuario: 6,
  id_categoria: 4,
  id_dificuldade: 3,
  id_ingredientes:y

},  

{

  nome: 'Cestinhas de Churros',
  tempo_aprox: 40,
  descrição: '',
  id_usuario: 3,
  id_categoria: 2,
  id_dificuldade: 2,
  id_ingredientes:y

},  

{

  nome: 'Dadinhos de Chocolate',
  tempo_aprox: 65,
  descrição: '',
  id_usuario: 4,
  id_categoria: 2,
  id_dificuldade: 1,
  id_ingredientes:y

},  

{

  nome: 'Bolo de milho verde',
  tempo_aprox: 60,
  descrição: '',
  id_usuario: 2,
  id_categoria: 3,
  id_dificuldade: 2,
  id_ingredientes:y

},  

{

  nome: 'Sobrecoxa Light',
  tempo_aprox: 55,
  descrição: '',
  id_usuario: 1,
  id_categoria: 1,
  id_dificuldade: 2,
  id_ingredientes:y

},  

{

  nome: 'Biscoitos de Batata',
  tempo_aprox: 40,
  descrição: '',
  id_usuario: 7,
  id_categoria: 3,
  id_dificuldade: 1,
  id_ingredientes:y

},  

{

  nome: 'Arroz Doce',
  tempo_aprox: 25,
  descrição: '',
  id_usuario: 5,
  id_categoria: 2,
  id_dificuldade: 1,
  id_ingredientes:y

},  


{

  nome: 'Mignon Grelhado ao molho',
  tempo_aprox: 40,
  descrição: '',
  id_usuario: 6,
  id_categoria: 1,
  id_dificuldade: 4,
  id_ingredientes:y

},  


{

  nome: 'Macarrão de Batata-doce com Legumes e Cogumelos',
  tempo_aprox: 50,
  descrição: '',
  id_usuario: 3,
  id_categoria: 1,
  id_dificuldade: 1,
  id_ingredientes:y

},  

    ])
  }
 }  

module.exports = ReceitaSeeder
