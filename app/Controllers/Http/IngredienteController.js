const Ingrediente = use('App/Models/Ingrediente') 

class IngredienteController {

  async index ({ request, response, view }) {
    let {page, perPage} = request.all()
    return Ingrediente.query().paginate(page, perPage)
    }

  async store ({ request, response }) {

    const campos = Ingrediente.getCamposCadastro()
    const dados = request.only(campos)

    return await Ingrediente.create(dados)
  }

  async show ({ params, request, response, view }) {

    return await Ingrediente.query()
                          .where('id', params.id)
                          .with('')
                          .first()
  }

  async update ({ params, request, response }) {

    const ingrediente = await Ingrediente.findOrFail(params.id)

    const campos = Ingrediente.getCamposCadastro()
    const dados = request.only(campos)

    ingrediente.merge(dados)
    await  ingrediente.save()
    return ingrediente
  }


  async destroy ({ params, request, response }) {

    const ingrediente = await Ingrediente.findOrFail(params.id)
    return await ingrediente.delete();
  }
}

module.exports = IngredienteController;