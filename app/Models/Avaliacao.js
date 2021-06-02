'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Avaliacao extends Model {
  static getCampoAvaliacao() {
    return ['comentario', 'nota', 'receita_id'];
  }
  static get table() {
    return 'avaliacoes';
  }

  usuario() {
    return this.belongsTo('App/Models/Usuario').select('id', 'nome', 'email');
  }
}

module.exports = Avaliacao;
