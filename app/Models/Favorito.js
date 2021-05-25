'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Favorito extends Model {
  static getCamposCadastro() {
    return ['usuario_id', 'receita_id'];
  }
}

module.exports = Favorito;
