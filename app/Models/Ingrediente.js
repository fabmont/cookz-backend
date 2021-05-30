'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Ingrediente extends Model {
  static getCamposCadastro() {
    return ['nome'];
  }

  receitas() {
    return this.belongsToMany('App/Models/Receita').pivotTable(
      'ingredientes_receitas'
    );
  }

  unidadeMedidas() {
    return this.belongsTo('App/Models/UnidadeMedida');
  }
}

module.exports = Ingrediente;
