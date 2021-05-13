const Favorito = use('App/Models/Favorito') 

class FavoritoController {

  async index ({ request, response, view }) {
    let {page, perPage} = request.all()
    return Favorito.query().paginate(page, perPage)
    }

  async store ({ request, response }) {

    const campos = Favorito.getCamposCadastro()
    const dados = request.only(campos)

    return await Favorito.create(dados)
  }

  async show ({ params, request, response, view }) {

    return await Favorito.query()
                          .where('id', params.id)
                          .with('')
                          .first()
  }

  async update ({ params, request, response }) {

    const favorito = await Favorito.findOrFail(params.id)

    const campos = Favorito.getCamposCadastro()
    const dados = request.only(campos)

    favorito.merge(dados)
    await  favorito.save()
    return favorito
  }


  async destroy ({ params, request, response }) {

    const favorito = await Favorito.findOrFail(params.id)
    return await favorito.delete();
  }
}

module.exports = FavoritoController;