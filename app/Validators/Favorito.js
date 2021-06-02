'use strict';
const ValidatorAbstract = use('App/Validators/ValidatorAbstract');
class Favorito extends ValidatorAbstract {
  get rules() {
    return {
      receita_id: 'required|integer',
    };
  }
}

module.exports = Favorito;
