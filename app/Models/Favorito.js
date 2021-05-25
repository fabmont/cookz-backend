'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Favorito extends Model {
  static getCamposCadastro() {
    return ['id_usuario', 'id', 'usuarios', 'id_receita', 'id', 'receitas'];
  }
}

module.exports = Favorito;
