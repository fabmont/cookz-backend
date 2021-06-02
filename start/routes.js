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

  Route.resource('/categorias', 'CategoriaController').apiOnly().validator(new Map([[['store', 'update'], 'Categoria' ],]));
  Route.resource('/dificuldades', 'DificuldadeController').apiOnly().validator(new Map([[['store', 'update'], 'Dificuldade' ],]));
  Route.resource('/receitas', 'ReceitaController').apiOnly().validator(new Map([[['store', 'update'], 'Receita' ],]));
  Route.resource('/unidade_medidas', 'UnidadeMedidaController').apiOnly().validator(new Map([[['store', 'update'], 'UnidadeMedida' ],]));
  Route.resource('/ingredientes', 'IngredienteController').apiOnly().validator(new Map([[['store', 'update'], 'Ingrediente' ],]));
  Route.resource('/modos_preparo', 'ModoPreparoController').apiOnly().validator(new Map([[['store', 'update'], 'ModoPreparo' ],]));
  Route.resource('/favoritos', 'FavoritoController').apiOnly().validator(new Map([[['store', 'update'], 'Favorito' ],]));
  Route.put('/favoritar', 'FavoritoController.favoritar');
})//.middleware('auth');

