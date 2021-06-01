'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Avaliacao extends Model {
  static getCampoAvaliação(){
    return ['comentario', 'nota','usuario_id','receita_id']
  }
  static get table() {
    return 'avaliacoes';
  }
}

module.exports = Avaliacao;
