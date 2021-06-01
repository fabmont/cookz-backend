'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

class Usuario extends Model {
  static get hidden() {
    return ['senha'];
  }

  static boot() {
    super.boot();

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.senha) {
        userInstance.senha = await Hash.make(userInstance.senha);
      }
    });
  }

  static getCamposCadastro() {
    return ['email', 'senha', 'nome', 'uf', 'usuarioProfissional'];
  }

  getUsuarioProfissional(value) {
    return Boolean(value);
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  receitas() {
    return this.hasMany('App/Models/Receita');
  }

  favoritos() {
    return this.hasMany('App/Models/Favorito')
      .select('id', 'usuario_id', 'receita_id')
      .with('receita');
  }
}

module.exports = Usuario;
