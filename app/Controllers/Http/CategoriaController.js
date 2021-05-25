'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categorias
 */
const Categoria = use('App/Models/Categoria');

class CategoriaController {
  async index({ request }) {
    const { page, perPage } = request.all();

    return Categoria.query().paginate(page, perPage);
  }

  async store({ request }) {
    const campos = Categoria.getCamposCadastro();
    const dados = request.only(campos);

    const categoria = await Categoria.create(dados);

    return categoria;
  }

  async show({ params }) {
    return await Categoria.findOrFail(params.id);
  }

  async update({ params, request, response }) {
    const categoria = await Categoria.findOrFail(params.id);

    const campos = Categoria.getCamposCadastro();
    const dados = request.only(campos);

    categoria.merge(dados);
    await categoria.save();
    return categoria;
  }

  async destroy({ params }) {
    const categoria = await Categoria.findOrFail(params.id);

    await categoria.delete();

    return {
      mensagem: 'Categoria excluída com sucesso.',
    };
  }
}

module.exports = CategoriaController;
