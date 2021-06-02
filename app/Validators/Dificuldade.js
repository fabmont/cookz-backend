'use strict'
const ValidatorAbstract = use('App/Validators/ValidatorAbstract')
class Dificuldade extends ValidatorAbstract{
  get rules () {
    return {
      descricao: 'required|max:30|min:2'
    }
  }
}

module.exports = Dificuldade
