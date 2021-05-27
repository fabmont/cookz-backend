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
    return this.belongsTo('App/Models/Usuario');
  }

  categoria() {
    return this.belongsTo('App/Models/Categoria');
  }

  dificuldade() {
    return this.belongsTo('App/Models/Dificuldade');
  }

  modo_preparo() {
    return this.hasMany('App/Models/ModoPreparo');
  }

  favorito() {
    return this.hasOne('App/Models/Favorito');
  }
}

module.exports = Receita;
