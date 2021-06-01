const Favorito = use('App/Models/Favorito');

class FavoritoController {
  async index({ auth, request }) {
    const usuario_id = auth.user.id;
    const { page, perPage = 10 } = request.all();

    return Favorito.query()
      .select('id', 'usuario_id', 'receita_id')
      .where({ usuario_id })
      .with('receita')
      .paginate(page, perPage);
  }

  async favoritar({ auth, request }) {
    const usuario_id = auth.user.id;
    const { is_favorito, receita_id } = request.only([
      'is_favorito',
      'receita_id',
    ]);

    const favorito = await Favorito.query()
      .where({ usuario_id, receita_id })
      .first();

    if (favorito) {
      if (is_favorito === false) {
        await favorito.delete();

        return {
          mensagem: 'Receita desfavoritada com sucesso.',
        };
      }

      return null;
    } else {
      if (is_favorito) {
        return await Favorito.create({ receita_id, usuario_id });
      }

      return null;
    }
  }
}

module.exports = FavoritoController;
