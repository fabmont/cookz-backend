'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Receita = use('App/Models/Receita');
const ModoPreparo = use('App/Models/ModoPreparo');

/**
 * Resourceful controller for interacting with receitas
 */
class ReceitaController {
  async index({ request }) {
    const {
      page,
      perPage = 10,
      nome,
      usuario_id,
      categoria_id,
      dificuldade_id,
    } = request.all();

    const filters = {};
    if (nome) filters.nome = nome;
    if (usuario_id) filters.usuario_id = usuario_id;
    if (categoria_id) filters.categoria_id = categoria_id;
    if (dificuldade_id) filters.dificuldade_id = dificuldade_id;

    const receita = await Receita.query()
      .where(filters)
      .with('usuario', (builder) => {
        builder.select('id', 'nome');
      })
      .with('categoria', (builder) => {
        builder.select('id', 'descricao');
      })
      .with('dificuldade', (builder) => {
        builder.select('id', 'descricao');
      })
      .with('favorito', (builder) => {
        builder.select('id', 'receita_id');
      })
      .paginate(page, perPage);

    return receita;
  }

  async store({ auth, request }) {
    const campos = Receita.getCamposCadastro();
    const params = request.only(campos);
    const usuario_id = auth.user.id;

    const receita = await Receita.create({ ...params, usuario_id });

    return receita;
  }

  async show({ params, response }) {
    const receita = await Receita.query()
      .where('id', params.id)
      .with('usuario', (builder) => {
        builder.select('id', 'nome', 'email');
      })
      .with('categoria', (builder) => {
        builder.select('id', 'descricao');
      })
      .with('dificuldade', (builder) => {
        builder.select('id', 'descricao');
      })
      .with('modo_preparo', (builder) => {
        builder.select('id', 'descricao', 'receita_id');
      })
      .with('favorito', (builder) => {
        builder.select('id', 'receita_id');
      })
      .first();

    if (!receita) {
      return response.status(404).send({
        mensagem: 'Receita não encontrada.',
      });
    }

    return receita;
  }

  async update({ params, request }) {
    const campos = Receita.getCamposCadastro();
    const bodyParams = request.only(campos);

    const receita = await Receita.findOrFail(params.id);

    receita.merge(bodyParams);
    await receita.save();

    return receita;
  }

  async destroy({ params }) {
    const receita = await Receita.findOrFail(params.id);

    await receita.delete();
    await ModoPreparo.query().where('receita_id', params.id).delete();

    return {
      mensagem: 'Receita excluída com sucesso',
    };
  }
}

module.exports = ReceitaController;
