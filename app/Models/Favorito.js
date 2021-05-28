'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Favorito extends Model {
  static getCamposCadastro() {
    return ['receita_id'];
  }

  receita() {
    return this.belongsTo('App/Models/Receita')
      .with('categoria')
      .with('dificuldade');
  }
}

module.exports = Favorito;
