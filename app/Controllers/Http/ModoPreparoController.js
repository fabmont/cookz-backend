'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ModoPreparo = use('App/Models/ModoPreparo');

/**
 * Resourceful controller for interacting with modopreparos
 */
class ModoPreparoController {
  async index({ request }) {
    const { receita_id } = request.only('receita_id');

    const filtros = {};
    if (receita_id) filtros.receita_id = receita_id;

    const modosPreparo = await ModoPreparo.query()
      .select('id', 'descricao', 'receita_id')
      .where(filtros)
      .fetch();

    return modosPreparo;
  }

  async store({ request }) {
    const { receita_id, lista_instrucoes = [] } = request.all();

    const payload = lista_instrucoes.map((item) => ({
      descricao: item,
      receita_id,
    }));

    await ModoPreparo.query().where('receita_id', receita_id).delete();

    const modoPreparo = await ModoPreparo.createMany(payload);

    return modoPreparo;
  }

  async show() {}

  async update() {}

  async destroy() {}
}

module.exports = ModoPreparoController;
