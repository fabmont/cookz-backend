'use strict'

/*
|--------------------------------------------------------------------------
| 200ReceitaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Receita = use('App/Models/Receita')


class ReceitaSeeder {
  async run() {
    await Receita.createMany([ 
{
  id: 1,
  nome: 'Brownie de Chocolate com Gengibre', 
  tempo_aprox: 75, 
  descrição: 'Brownie é uma sobremesa de chocolate típico da culinária dos Estados Unidos e pode considerar-se um bolo feito num tabuleiro para bolos e partido em pequenos quadrados. É geralmente acompanhado por sorvete, mas pode ter uma cobertura de geléia de Damasco e pedaços de nozes na massa',
  id_usuario: 2, 
  id_categoria: 2, 
  id_dificuldade: 1,
  id_ingredientes: x
},
{
  id: 2,
  nome: 'Peixe Delícia de Olinda',
  tempo_aprox: 50,
  descrição: 'Querendo uma opção diferente de carne para servir em um almoço especial? Confira a receita de peixe ao molho com gengibre a seguir para aprender a fazer um prato delicioso, cheio de sabor e perfeito para qualquer ocasião!',
  id_usuario: 1,
  id_categoria: 1,
  id_dificuldade: 2,
  id_ingredientes:y

},

{
  id: 3,
  nome: 'Rosbife',
  tempo_aprox: 60,
  descrição: 'Aprenda a fazer um rosbife de restaurante em casa,Típico do Reino Unido, prato pode ser preparado com ingredientes simples. Com ingredientes fáceis de encontrar, o tradicional prato entra como boa pedida para o primeiro final de semana!',
  id_usuario: 7,
  id_categoria: 1,
  id_dificuldade: 4,
  id_ingredientes:y

},  

{
  id: 4,
  nome: 'Pão Árabe de Micro-ondas',
  tempo_aprox: 30,
  descrição: 'Seja para aprender algo novo ou para ajeitar aquele tempero que sempre acaba ficando mais forte, o pão sírio de microondas veio para ajudar,Confira todas as dicas e detalhes dessa receita de Pão sírio de microondas que é uma delícia e simples de ser feita! Divirta-se, delicie-se e aprenda sempre mais!',
  id_usuario: 5,
  id_categoria: 3,
  id_dificuldade: 1,
  id_ingredientes:y

},  

{
  id: 5,
  nome: 'Vinagrete de Polvo com Torradas Aromáticas',
  tempo_aprox: 45,
  descrição: 'Receita deliciosa confira a técnica fácil para cozinhar o polvo – e evitar a frustração da carne borrachuda. Se der, prepare de véspera. Quanto mais tempo o preparo fica apurando os sabores na geladeira, mais gostoso ele fica.',
  id_usuario: 6,
  id_categoria: 4,
  id_dificuldade: 3,
  id_ingredientes:y

},  

{
  id: 6,
  nome: 'Cestinhas de Churros',
  tempo_aprox: 40,
  descrição: 'Churro é um alimento de origem ibérica, muito popular nos países latino-americanos. Este doce é preparado com massa à base de farinha de trigo e água, em formato cilíndrico e frito em óleo vegetal. Logo após, ele pode ser salpicado com uma camada de açúcar por fora',
  id_usuario: 3,
  id_categoria: 2,
  id_dificuldade: 2,
  id_ingredientes:y

},  

{
  id: 7,
  nome: 'Dadinhos de Chocolate',
  tempo_aprox: 65,
  descrição: 'Dedinhos de chocolate: crianças (e marmanjos) vão adorar! Super fáceis de fazer, palitinhos levam biscoito, doce de leite e chocolate e ficam uma delícia! Confira a receita',
  id_usuario: 4,
  id_categoria: 2,
  id_dificuldade: 1,
  id_ingredientes:y

},  

{
  id: 8,
  nome: 'Bolo de milho verde',
  tempo_aprox: 60,
  descrição: 'Sabe aquele bolo da vovó? Então é esse bolo de milho, ele vaii te trazer as melhoress recordações que tiver! Além de ser super simples de fazer',
  id_usuario: 2,
  id_categoria: 3,
  id_dificuldade: 2,
  id_ingredientes:y

},  

{
  id: 9,
  nome: 'Sobrecoxa Light',
  tempo_aprox: 55,
  descrição: 'Sabe aquele prato fit mas elaborado e que e deixa com agua na boca? Essa receita é exatamente assim, perfeita pra quem quer praticidade, rapidez e não quer sair da dieta! Confira o passo a passo',
  id_usuario: 1,
  id_categoria: 1,
  id_dificuldade: 2,
  id_ingredientes:y

},  

{
  id: 10,
  nome: 'Biscoitos de Batata',
  tempo_aprox: 40,
  descrição: 'Perfeito para servir no café da manhã, no lanche da tarde ou para saborear ao longo do dia, o biscoito de batata-doce é uma opção saudável e muito gostosa. Pensando nisso, separamos essa receita deliciosa e fácil de fazer. ',
  id_usuario: 7,
  id_categoria: 3,
  id_dificuldade: 1,
  id_ingredientes:y

},  

{
  id: 11,
  nome: 'Arroz Doce',
  tempo_aprox: 25,
  descrição: 'O arroz-doce, também conhecido como arroz de função e arroz de leite, é um prato feito de arroz cozido em leite e açúcar, temperado com casca de limão, canela em pau, água de flor de laranja, cravo etc., e em geral polvilhado de canela. Simples de fazer e uma delicia ',
  id_usuario: 5,
  id_categoria: 2,
  id_dificuldade: 1,
  id_ingredientes:y

},  


{
  id: 12,
  nome: 'Mignon Grelhado ao molho',
  tempo_aprox: 40,
  descrição: 'O clássico dos restaurantes e dos casamentos preparado na cozinha da sua casa e – o melhor de tudo – em coisa de quinze minutos. Pode marcar o jantar romântico que o cardápio está resolvido. Uma dica: antes de começar, separe todos os ingredientes mesmo. Como o preparo é bem rápido, assim você não corre o risco de se atrapalhar.',
  id_usuario: 6,
  id_categoria: 1,
  id_dificuldade: 4,
  id_ingredientes:y

},  


{
  id: 13,
  nome: 'Macarrão de Batata-doce com Legumes e Cogumelos',
  tempo_aprox: 50,
  descrição: 'Quer aprender a preparar “japchae” (잡채)? É macarrão coreano com legumes, que pode ser consumido gelado, bem adequado para os dias muito quentes. Este Macarrão de Batata Doce com Cogumelos é a nossa versão do Japchae. Japchae significa (잡) misturado de (채) vegetais, mas pode também ter variações, como adicionando carne, pimenta, frutos do mar, broto de feijão ou com vários tipos de cogumelos. Você mantendo a base da pode criar uma misture de vegetais que lhe agrade e será a sua versão.',
  id_usuario: 3,
  id_categoria: 1,
  id_dificuldade: 1,
  id_ingredientes:y

},  

    ])
  }
 }  

module.exports = ReceitaSeeder
