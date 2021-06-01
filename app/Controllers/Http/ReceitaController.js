'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Receita = use('App/Models/Receita');
const ModoPreparo = use('App/Models/ModoPreparo');
const Helpers = use('Helpers');
const fs = require('fs');

class ReceitaController {
  async index({ request }) {
    const {
      page,
      perPage = 10,
      nome,
      usuario_id,
      categoria_id,
      dificuldade_id,
    } = request.all();

    const filters = {};
    if (nome) filters.nome = nome;
    if (usuario_id) filters.usuario_id = usuario_id;
    if (categoria_id) filters.categoria_id = categoria_id;
    if (dificuldade_id) filters.dificuldade_id = dificuldade_id;

    const receita = await Receita.query()
      .select(
        'id',
        'nome',
        'tempo_preparo',
        'vegano',
        'imagem_caminho',
        'usuario_id',
        'categoria_id',
        'dificuldade_id'
      )
      .where(filters)
      .with('usuario')
      .with('categoria')
      .with('dificuldade')
      .paginate(page, perPage);

    return receita;
  }

  async store({ auth, request }) {
    const campos = Receita.getCamposCadastro();
    const params = request.only(campos);
    const usuario_id = auth.user.id;

    const payload = {
      ...params,
      vegano: Boolean(params.vegano),
      tempo_preparo: Number(params.tempo_preparo),
      dificuldade_id: Number(params.dificuldade_id),
      categoria_id: Number(params.categoria_id),
      usuario_id,
    };

    const receitaImagem = request.file('imagem', {
      types: ['image'],
      size: '2mb',
    });

    if (receitaImagem) {
      await receitaImagem.move(Helpers.tmpPath('uploads'), {
        name: `${Date.now()}_${receitaImagem.clientName}`,
        overwrite: true,
      });

      if (!receitaImagem.moved()) {
        return receitaImagem.error();
      }

      payload.imagem_caminho = receitaImagem.fileName;
    }

    const receita = await Receita.create(payload);

    return receita;
  }

  async show({ params, response }) {
    const receita = await Receita.query()
      .where('id', params.id)
      .with('usuario')
      .with('categoria')
      .with('dificuldade')
      .with('modo_preparo')
      .with('ingredientes')
      .first();

    if (!receita) {
      return response.status(404).send({
        mensagem: 'Receita não encontrada.',
      });
    }

    return receita;
  }

  async update({ params, request }) {
    const campos = Receita.getCamposCadastro();
    const reqParams = request.only(campos);

    const receita = await Receita.findOrFail(params.id);

    const payload = {
      nome: reqParams.nome || receita.nome,
      descricao: reqParams.descricao || receita.descricao,
      vegano: Boolean(reqParams.vegano || receita.vegano),
      tempo_preparo: Number(reqParams.tempo_preparo || receita.tempo_preparo),
      dificuldade_id: Number(
        reqParams.dificuldade_id || receita.dificuldade_id
      ),
      categoria_id: Number(reqParams.categoria_id || receita.categoria_id),
    };

    const receitaImagem = request.file('imagem', {
      types: ['image'],
      size: '2mb',
    });

    if (receitaImagem) {
      await receitaImagem.move(Helpers.tmpPath('uploads'), {
        name:
          receita.imagem_caminho || `${Date.now()}_${receitaImagem.clientName}`,
        overwrite: true,
      });

      if (!receitaImagem.moved()) {
        return receitaImagem.error();
      }

      payload.imagem_caminho = receitaImagem.fileName;
    }

    receita.merge(payload);

    await receita.save();

    return receita;
  }

  async destroy({ params }) {
    const receita = await Receita.findOrFail(params.id);

    if (receita.imagem_caminho) {
      fs.unlinkSync(`${Helpers.tmpPath('uploads')}/${receita.imagem_caminho}`);
    }

    await receita.delete();
    await ModoPreparo.query().where('receita_id', params.id).delete();

    return {
      mensagem: 'Receita excluída com sucesso',
    };
  }
}

module.exports = ReceitaController;
