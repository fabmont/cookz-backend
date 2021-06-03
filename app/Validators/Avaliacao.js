'use strict';

const ValidatorAbstract = use('App/Validators/ValidatorAbstract');

class Avaliacao extends ValidatorAbstract {
  get rules() {
    return {
      comentario: 'required|max:255',
      nota: 'required|integer|under:10|above:0',
      receita_id: 'required|integer',
    };
  }
}

module.exports = Avaliacao;
