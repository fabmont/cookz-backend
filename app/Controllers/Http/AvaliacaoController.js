'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with avaliacaos
 */
const Avaliacao = use('App/Models/Avaliacao');
class AvaliacaoController {
  async index({ request }) {
    const { page, perPage = 10, receita_id, user_id } = request.all();

    const filters = {};

    if (user_id) filters.user_id = user_id;
    if (receita_id) filters.receita_id = receita_id;

    return Avaliacao.query()
      .select('id', 'comentario', 'nota', 'usuario_id', 'receita_id')
      .where(filters)
      .with('usuario')
      .paginate(page, perPage);
  }

  async store({ auth, request }) {
    const usuarioLogado = auth.user.id;
    const campos = Avaliacao.getCampoAvaliacao();
    const avaliacoes = request.only(campos);

    return await Avaliacao.create({ ...avaliacoes, usuario_id: usuarioLogado });
  }

  async show({ params }) {
    return await Avaliacao.findOrFail(params.id);
  }

  async update({ params, request }) {
    const avaliacao = await Avaliacao.findOrFail(params.id);
    const campos = Avaliacao.getCampoAvaliacao();
    const dados = request.only(campos);
    avaliacao.merge(dados);
    await avaliacao.save();
    return avaliacao;
  }

  async destroy({ params }) {
    const avaliacao = await Avaliacao.findOrFail(params.id);
    return await avaliacao.delete();
  }
}

module.exports = AvaliacaoController;
