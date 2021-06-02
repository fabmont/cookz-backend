'use strict';

const ValidatorAbstract = use('App/Validators/ValidatorAbstract');

class UsuarioRegistro extends ValidatorAbstract {
  get rules() {
    return {
      nome: 'required|max:255',
      uf: 'required|max:2',
      usuarioProfissional: 'required|boolean',
      email: 'required|email|unique:usuarios',
      senha: 'required|min:8',
    };
  }
}

module.exports = UsuarioRegistro;
