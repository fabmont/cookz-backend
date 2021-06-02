'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class IngredientesReceita extends Model {
  static getCampoIngredienter(){
    return ['quantidade','ingrediente_id','receita_id','unidade_medida_id']
  }
  unidadeMedidas() {
    return this.hasOne('App/Models/UnidadeMedida', 'id', 'unidade_medida_id');
  }
}

module.exports = IngredientesReceita;
