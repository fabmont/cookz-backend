const Favorito = use('App/Models/Favorito');

class FavoritoController {
  async index({ request }) {
    const { page, perPage } = request.all();

    return Favorito.query().paginate(page, perPage);
  }

  async store({ request }) {
    const campos = Favorito.getCamposCadastro();
    const dados = request.only(campos);

    return await Favorito.create(dados);
  }

  async show({ params }) {
    return await Favorito.query().where('id', params.id).first();
  }

  async update({ params, request, response }) {
    const favorito = await Favorito.findOrFail(params.id);

    const campos = Favorito.getCamposCadastro();
    const dados = request.only(campos);

    favorito.merge(dados);
    await favorito.save();
    return favorito;
  }

  async destroy({ params }) {
    const favorito = await Favorito.findOrFail(params.id);

    await favorito.delete();

    return {
      mensagem: 'Receita desfavoritada com sucesso.',
    };
  }
}

module.exports = FavoritoController;
