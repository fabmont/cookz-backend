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
  async run () {
    await Receita.createMany([{  
   // colocar json das receitas aqui
      
    }])

  }
}

module.exports = ReceitaSeeder
