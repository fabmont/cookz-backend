'use strict';

const ValidatorAbstract = use('App/Validators/ValidatorAbstract');

class UsuarioLogin extends ValidatorAbstract {
  get rules() {
    return {
      email: 'required|email',
      senha: 'required|min:8',
    };
  }
}

module.exports = UsuarioLogin;
