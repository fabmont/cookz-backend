'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

class Usuario extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.senha) {
        uarioInstance.senha = await Hash.make(userInstance.senha);
      }
    });
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }
}

module.exports = Usuario;
