'use strict';
const ValidatorAbstract = use('App/Validators/ValidatorAbstract');
class Categoria extends ValidatorAbstract {
  get rules() {
    return {
      descricao: 'required|max:50|min:2',
    };
  }
}

module.exports = Categoria;
