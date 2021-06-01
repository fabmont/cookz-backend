'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class IngredientesReceita extends Model {
  unidadeMedidas() {
    return this.hasOne('App/Models/UnidadeMedida', 'id', 'unidade_medida_id');
  }
}

module.exports = IngredientesReceita;
