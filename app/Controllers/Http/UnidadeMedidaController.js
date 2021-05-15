const UnidadeMedida = use('App/Models/UnidadeMedida') 

class UnidadeMedidaController {

  async index ({ request, response, view }) {
    let {page, perPage} = request.all()
    return UnidadeMedida.query().paginate(page, perPage)
    }

  async store ({ request, response }) {

    const campos = UnidadeMedida.getCamposCadastro()
    const dados = request.only(campos)

    return await UnidadeMedida.create(dados)
  }

  async show ({ params, request, response, view }) {

    return await UnidadeMedida.query()
                          .where('id', params.id)
                          .with('')
                          .first()
  }

  async update ({ params, request, response }) {

    const unidademedida = await UnidadeMedida.findOrFail(params.id)

    const campos = UnidadeMedida.getCamposCadastro()
    const dados = request.only(campos)

    unidademedida.merge(dados)
    await  unidademedida.save()
    return unidademedida
  }


  async destroy ({ params, request, response }) {

    const unidademedida = await UnidadeMedida.findOrFail(params.id)
    return await unidademedida.delete();
  }
}

module.exports = UnidadeMedidaController;