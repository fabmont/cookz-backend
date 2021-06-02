'use strict';

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// Rotas públicas, requisições sem token válido poderão acessá-las
Route.post('/login', 'UsuarioController.login');
Route.post('/cadastrar', 'UsuarioController.store');

// Rotas que precisam de autenticação
// Caso uma requisição seja feita pra os endpoints abaixo sem um token válido, a requsição será rejeitada.
Route.group(() => {
  Route.get('/usuarios', 'UsuarioController.index');
  Route.get('/usuarios/:id', 'UsuarioController.show');
  Route.put('/usuarios/:id', 'UsuarioController.update');

  Route.resource('/categorias', 'CategoriaController').apiOnly();
  Route.resource('/dificuldades', 'DificuldadeController').apiOnly();
  Route.resource('/receitas', 'ReceitaController').apiOnly();
  Route.resource('/unidade_medidas', 'UnidadeMedidaController').apiOnly();
  Route.resource('/ingredientes', 'IngredienteController').apiOnly();
  Route.resource('/modos_preparo', 'ModoPreparoController').apiOnly();
  Route.resource('/favoritos', 'FavoritoController').apiOnly();
  Route.put('/favoritar', 'FavoritoController.favoritar');
  Route.resource('/avaliacoes', 'AvaliacaoController').apiOnly();
}).middleware('auth');
