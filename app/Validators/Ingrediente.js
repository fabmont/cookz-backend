'use strict';
const ValidatorAbstract = use('App/Validators/ValidatorAbstract');
class Ingrediente extends ValidatorAbstract {
  get rules() {
    return {
      nome: 'required|max:50|min:2',
    };
  }
}

module.exports = Ingrediente;
