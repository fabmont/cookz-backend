'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Usuario = use('App/Models/Usuario');
class UsuarioController {
  // Login the user inside the platform
  async login({ auth, request }) {
    const { email, senha } = request.all();
    const token = await auth.attempt(email, senha);

    return token;
  }

  // Get all the registered users
  async index() {
    const usuarios = await Usuario.query()
      .select('id', 'nome', 'email')
      .fetch();

    return usuarios;
  }

  // Register a new user inside the platform
  async store({ request }) {
    const params = request.only([
      'email',
      'senha',
      'nome',
      'uf',
      'usuarioProfissional',
    ]);

    const usuarios = await Usuario.create(params);

    return {
      id: usuarios.id,
      email: usuarios.email,
      nome: usuarios.nome,
      uf: usuarios.uf,
      usuarioProfissional: usuarios.usuarioProfissional,
      created_at: usuarios.created_at,
      updated_at: usuarios.updated_at,
    };
  }

  // Get a specific user by id
  async show({ auth, params, response }) {
    const loggedUser = auth.user.id;
    const { id } = params;

    if (loggedUser !== Number(id)) {
      return response.status(401).send({
        message: 'Perfis só podem ter acesso ao seu próprio dado.',
      });
    }

    const usuarios = await Usuario.query()
      .select('id', 'nome', 'email', 'created_at')
      .where('id', id)
      .first();

    return usuarios;
  }
}

module.exports = UsuarioController;
