'use strict';

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

module.exports = {
  authenticator: 'jwt',
  session: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'session',
    uid: 'email',
    password: 'senha',
  },
  basic: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'basic',
    uid: 'email',
    password: 'senha',
  },
  jwt: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'jwt',
    uid: 'email',
    password: 'senha',
    options: {
      secret: Env.get('APP_KEY'),
    },
  },
  api: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'api',
    uid: 'email',
    password: 'senha',
  },
};
