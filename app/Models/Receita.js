'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const Helpers = use('Helpers');

class Receita extends Model {
  static getCamposCadastro() {
    return [
      'nome',
      'tempo_preparo',
      'descricao',
      'imagem',
      'vegano',
      'dificuldade_id',
      'categoria_id',
      'ingredientes',
    ];
  }

  getTempoPreparo(value) {
    return `${value} min.`;
  }

  getVegano(value) {
    return Boolean(value);
  }

  getImagemCaminho(value) {
    if (!value) {
      return null;
    }

    return `${Helpers.tmpPath('uploads')}/${value}`;
  }

  usuario() {
    return this.belongsTo('App/Models/Usuario').select('id', 'nome');
  }

  categoria() {
    return this.belongsTo('App/Models/Categoria').select('id', 'descricao');
  }

  dificuldade() {
    return this.belongsTo('App/Models/Dificuldade').select('id', 'descricao');
  }

  modo_preparo() {
    return this.hasMany('App/Models/ModoPreparo').select(
      'id',
      'descricao',
      'receita_id'
    );
  }

  ingredientes() {
    return this.belongsToMany('App/Models/Ingrediente')
      .pivotModel('App/Models/IngredientesReceita')
      .withPivot(['quantidade', 'unidade_medida_id'])
      .select('id', 'nome');
  }
}

module.exports = Receita;
