'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categorias
 */
 const Categoria = use('App/Models/Categoria') 

class CategoriaController {

  async index ({ request, response, view }) {
    let {page, perPage} = request.all()
    return Categoria.query().paginate(page, perPage)
    }

  async store ({ request, response }) {

    const campos = Categoria.getCamposCadastro()
    const dados = request.only(campos)

    return await Categoria.create(dados)
  }

  async show ({ params, request, response, view }) {

    return await Categoria.query()
                          .where('id', params.id)
                          .with('')
                          .first()
  }

  async update ({ params, request, response }) {

    const categoria = await Categoria.findOrFail(params.id)

    const campos = Categoria.getCamposCadastro()
    const dados = request.only(campos)

    categoria.merge(dados)
    await  categoria.save()
    return categoria
  }
  

  async destroy ({ params, request, response }) {

    const categoria = await Categoria.findOrFail(params.id)
    return await categoria.delete();
  }
}

module.exports = CategoriaController;
