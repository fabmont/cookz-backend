'use strict'

/*
|--------------------------------------------------------------------------
| 400DificuldadeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Dificuldade = use('App/Models/Dificuldade')

class DificuldadeSeeder {
  async run () {
    await Dificuldade.createMany([
      
      {id: 1, descricao: 'fácil'},
      {id: 2, descricao: 'médio'},
      {id: 3, descricao: 'difícil'},
      {id: 4, descricao: 'muito-difícil'},
    ])

  }
}

module.exports = DificuldadeSeeder
