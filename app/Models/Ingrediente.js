'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Ingrediente extends Model {
  static getCamposCadastro() {
    return ['nome'];
  }
}

module.exports = Ingrediente;
