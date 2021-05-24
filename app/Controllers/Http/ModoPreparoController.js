'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ModoPreparo = use('App/Models/ModoPreparo');

/**
 * Resourceful controller for interacting with modopreparos
 */
class ModoPreparoController {
  async index() {
    const modosPreparo = await ModoPreparo.query()
      .select('id', 'descricao')
      .fetch();

    return modosPreparo;
  }

  async store({ request }) {
    const { receita_id, lista_instrucoes = [] } = request.all();

    const payload = lista_instrucoes.map((item) => ({ ...item, receita_id }));

    const modoPreparo = await ModoPreparo.createMany(payload);

    return modoPreparo;
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ModoPreparoController;
