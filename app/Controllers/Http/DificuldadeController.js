'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Dificuldade = use('App/Models/Dificuldade');

/**
 * Resourceful controller for interacting with dificuldades
 */
class DificuldadeController {
  async index() {
    const dificuldades = await Dificuldade.query()
      .select('id', 'descricao')
      .fetch();

    return dificuldades;
  }

  async store({ request }) {
    const { descricao } = request.all();

    const dificuldade = await Dificuldade.create({ descricao });

    return dificuldade;
  }

  async show({ params, response }) {
    const { id } = params;

    try {
      const dificuldade = await Dificuldade.findOrFail(id);

      return dificuldade;
    } catch (error) {
      return response.status(404).send({
        mensagem: `Nenhuma dificuldade com o id=${id} foi encontrada.`,
      });
    }
  }

  async update({ params, request, response }) {
    const { id } = params;
    const { descricao } = request.all();

    const dificuldade = await Dificuldade.findOrFail(id);

    dificuldade.descricao = descricao || dificuldade.descricao;

    await dificuldade.save();

    return dificuldade;
  }

  async destroy({ params }) {
    const { id } = params;

    const dificuldade = await Dificuldade.findOrFail(id);

    await dificuldade.delete();

    return {
      mensagem: 'Dificuldade excluída com sucesso.',
    };
  }
}

module.exports = DificuldadeController;
