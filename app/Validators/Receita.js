'use strict';
const ValidatorAbstract = use('App/Validators/ValidatorAbstract');
class Receita extends ValidatorAbstract {
  get rules() {
    return {
      nome: 'required|max:30|min:2',
      descricao: 'required|max:300|min:2',
      vegano: 'required|boolean',
      imagem_caminho: 'min:8',
      usuario_id: 'required|integer',
      categoria_id: 'required|integer',
      dificuldade_id: 'required|integer',
    };
  }
}

module.exports = Receita;
