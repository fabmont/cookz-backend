'use strict';
const ValidatorAbstract = use('App/Validators/ValidatorAbstract');
class UnidadeMedida extends ValidatorAbstract {
  get rules() {
    return {
      descricao: 'required|min:2',
      sigla: 'required|min:1|max:3',
    };
  }
}

module.exports = UnidadeMedida;
