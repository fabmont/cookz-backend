'use strict';
const ValidatorAbstract = use('App/Validators/ValidatorAbstract');
class Receita extends ValidatorAbstract {
  get rules() {
    return {
      nome: 'required|max:30|min:2',
      tempo_preparo: 'required|integer',
      descricao: 'required|max:255|min:2',
      vegano: 'required|boolean',
      categoria_id: 'required|integer',
      dificuldade_id: 'required|integer',
    };
  }
}

module.exports = Receita;
