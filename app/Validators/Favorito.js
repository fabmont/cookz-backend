'use strict'
const ValidatorAbstract = use('App/Validators/ValidatorAbstract')
class Favorito extends ValidatorAbstract{
  get rules () {
    return {
      usuario_id: 'required|integer',
      receita_id: 'required|integer'
    }
  }
}

module.exports = Favorito
