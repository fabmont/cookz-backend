const UnidadeMedida = use('App/Models/UnidadeMedida');

class UnidadeMedidaController {
  async index({ request }) {
    let { page, perPage = 10 } = request.all();
    return UnidadeMedida.query()
      .select('id', 'descricao', 'sigla')
      .paginate(page, perPage);
  }

  async store({ request }) {
    const campos = UnidadeMedida.getCamposCadastro();
    const dados = request.only(campos);

    return await UnidadeMedida.create(dados);
  }

  async show({ params }) {
    return await UnidadeMedida.findOrFail(params.id);
  }

  async update({ params, request }) {
    const unidademedida = await UnidadeMedida.findOrFail(params.id);

    const campos = UnidadeMedida.getCamposCadastro();
    const dados = request.only(campos);

    unidademedida.merge(dados);

    await unidademedida.save();

    return unidademedida;
  }

  async destroy({ params }) {
    const unidademedida = await UnidadeMedida.findOrFail(params.id);

    await unidademedida.delete();

    return {
      mensangem: 'Unidade de medida excluída com sucesso.',
    };
  }
}

module.exports = UnidadeMedidaController;
