'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with ingredientesreceitas
 */
const IngredientesReceita = use('App/Models/IngredientesReceita')
class IngredientesReceitaController {
  async index({ request, response, view }) {
    let {page, perPage} = request.all()
    perPage = perPage ? perPage : 5
    return IngredientesReceita.query().paginate(page, perPage)
  }

  async store({ request, response }) {
    const campos = IngredientesReceita.getCampoIngredienter() 
    const ingredientesreceitas = request.only(campos) 
    return await IngredientesReceita.create(ingredientesreceitas)
  }

  async show({ params, request, response, view }) {return await IngredientesReceita.findOrFail(params.id) }

  async update({ params, request, response }) {
    const ingredientesreceita = await IngredientesReceita.findOrFail(params.id)
    const campos = IngredientesReceita.getCampoIngredienter()
    const dados = request.only(campos)
    ingredientesreceita.merge(dados) 
    await ingredientesreceita.save() 
    return ingredientesreceita
  }

  async destroy({ params, request, response }) {
    const ingredientesreceitas = await IngredientesReceita.findOrFail(params.id)
    return await ingredientesreceitas.delete();
  }
}

module.exports = IngredientesReceitaController;
