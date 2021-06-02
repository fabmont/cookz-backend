'use strict'
const ValidatorAbstract = use('App/Validators/ValidatorAbstract')
class ModoPreparo extends ValidatorAbstract{
  get rules () {
    return {
      descricao: 'required|max:2200|min:2',
      receita_id: 'required|integer'
    }
  }
}

module.exports = ModoPreparo
