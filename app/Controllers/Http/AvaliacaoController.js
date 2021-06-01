'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with avaliacaos
 */
const Avaliação = use('App/Models/Avaliação')
class AvaliacaoController {
  async index({ request, response, view }) {
    let {page, perPage} = request.all()
    perPage = perPage ? perPage : 5
    return Avaliação.query().paginate(page, perPage)
  }

  async store({ request, response }) {
    const campos = Avaliação.getCampoAvaliação() 
    const avaliacoes = request.only(campos) 
    return await Avaliação.create(avaliacoes)
  }

  async show({ params, request, response, view }) {return await Avaliação.findOrFail(params.id)}

  async update({ params, request, response }) {
    const avaliacao = await Avaliação.findOrFail(params.id)
    const campos = Avaliação.getCampoAvaliação()
    const dados = request.only(campos)
    avaliacao.merge(dados) 
    await avaliacao.save() 
    return avaliacao
  }

  async destroy({ params, request, response }) {
    const avaliacao = await Avaliação.findOrFail(params.id)
    return await avaliacao.delete();
  }
}

module.exports = AvaliacaoController;
