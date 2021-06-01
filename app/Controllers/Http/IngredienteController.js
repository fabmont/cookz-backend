const Ingrediente = use('App/Models/Ingrediente');

class IngredienteController {
  async index({ request }) {
    const { page, perPage = 10 } = request.all();

    return Ingrediente.query().select('id', 'nome').paginate(page, perPage);
  }

  async store({ request }) {
    const campos = Ingrediente.getCamposCadastro();
    const dados = request.only(campos);

    return await Ingrediente.create(dados);
  }

  async show({ params }) {
    return await Ingrediente.findOrFail(params.id);
  }

  async update({ params, request }) {
    const ingrediente = await Ingrediente.findOrFail(params.id);

    const campos = Ingrediente.getCamposCadastro();
    const dados = request.only(campos);

    ingrediente.merge(dados);

    await ingrediente.save();

    return ingrediente;
  }

  async destroy({ params }) {
    const ingrediente = await Ingrediente.findOrFail(params.id);

    await ingrediente.delete();

    return {
      mensagem: 'Ingrediente excluído com sucesso.',
    };
  }
}

module.exports = IngredienteController;
