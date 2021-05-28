'use strict';

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Receita = use('App/Models/Receita');

class ReceitaSeeder {
  async run() {
    await Receita.createMany([
      {
        nome: 'Brownie de Chocolate com Gengibre',
        tempo_preparo: 75,
        descricao:
          'Brownie é uma sobremesa de chocolate típico da culinária dos Estados Unidos e pode considerar-se um bolo feito num tabuleiro para bolos e partido em pequenos quadrados. É geralmente acompanhado por sorvete, mas pode ter uma cobertura de geléia de Damasco e pedaços de nozes na massa',
        vegano: false,
        usuario_id: 2,
        categoria_id: 2,
        dificuldade_id: 1,
      },
      {
        nome: 'Peixe Delícia de Olinda',
        tempo_preparo: 50,
        descricao:
          'Querendo uma opção diferente de carne para servir em um almoço especial? Confira a receita de peixe ao molho com gengibre a seguir para aprender a fazer um prato delicioso, cheio de sabor e perfeito para qualquer ocasião!',
        vegano: false,
        usuario_id: 1,
        categoria_id: 1,
        dificuldade_id: 2,
      },

      {
        nome: 'Rosbife',
        tempo_preparo: 60,
        descricao:
          'Aprenda a fazer um rosbife de restaurante em casa,Típico do Reino Unido, prato pode ser preparado com ingredientes simples. Com ingredientes fáceis de encontrar, o tradicional prato entra como boa pedida para o primeiro final de semana!',
        vegano: false,
        usuario_id: 7,
        categoria_id: 1,
        dificuldade_id: 4,
      },

      {
        nome: 'Pão Árabe de Micro-ondas',
        tempo_preparo: 30,
        descricao:
          'Seja para aprender algo novo ou para ajeitar aquele tempero que sempre acaba ficando mais forte, o pão sírio de microondas veio para ajudar,Confira todas as dicas e detalhes dessa receita de Pão sírio de microondas que é uma delícia e simples de ser feita! Divirta-se, delicie-se e aprenda sempre mais!',
        vegano: false,

        usuario_id: 5,
        categoria_id: 3,
        dificuldade_id: 1,
      },

      {
        nome: 'Vinagrete de Polvo com Torradas Aromáticas',
        tempo_preparo: 45,
        descricao:
          'Receita deliciosa confira a técnica fácil para cozinhar o polvo – e evitar a frustração da carne borrachuda. Se der, prepare de véspera. Quanto mais tempo o preparo fica apurando os sabores na geladeira, mais gostoso ele fica.',
        vegano: false,
        usuario_id: 6,
        categoria_id: 4,
        dificuldade_id: 3,
      },

      {
        nome: 'Cestinhas de Churros',
        tempo_preparo: 40,
        descricao:
          'Churro é um alimento de origem ibérica, muito popular nos países latino-americanos. Este doce é preparado com massa à base de farinha de trigo e água, em formato cilíndrico e frito em óleo vegetal. Logo após, ele pode ser salpicado com uma camada de açúcar por fora',
        vegano: false,
        usuario_id: 3,
        categoria_id: 2,
        dificuldade_id: 2,
      },

      {
        nome: 'Dadinhos de Chocolate',
        tempo_preparo: 65,
        descricao:
          'Dedinhos de chocolate: crianças (e marmanjos) vão adorar! Super fáceis de fazer, palitinhos levam biscoito, doce de leite e chocolate e ficam uma delícia! Confira a receita',
        vegano: false,
        usuario_id: 4,
        categoria_id: 2,
        dificuldade_id: 1,
      },

      {
        nome: 'Bolo de milho verde',
        tempo_preparo: 60,
        descricao:
          'Sabe aquele bolo da vovó? Então é esse bolo de milho, ele vaii te trazer as melhoress recordações que tiver! Além de ser super simples de fazer',
        vegano: false,
        usuario_id: 2,
        categoria_id: 3,
        dificuldade_id: 2,
      },

      {
        nome: 'Sobrecoxa Light',
        tempo_preparo: 55,
        descricao:
          'Sabe aquele prato fit mas elaborado e que e deixa com agua na boca? Essa receita é exatamente assim, perfeita pra quem quer praticidade, rapidez e não quer sair da dieta! Confira o passo a passo',
        vegano: false,
        usuario_id: 1,
        categoria_id: 1,
        dificuldade_id: 2,
      },

      {
        nome: 'Biscoitos de Batata',
        tempo_preparo: 40,
        descricao:
          'Perfeito para servir no café da manhã, no lanche da tarde ou para saborear ao longo do dia, o biscoito de batata-doce é uma opção saudável e muito gostosa. Pensando nisso, separamos essa receita deliciosa e fácil de fazer. ',
        vegano: false,
        usuario_id: 7,
        categoria_id: 3,
        dificuldade_id: 1,
      },

      {
        nome: 'Arroz Doce',
        tempo_preparo: 25,
        descricao:
          'O arroz-doce, também conhecido como arroz de função e arroz de leite, é um prato feito de arroz cozido em leite e açúcar, temperado com casca de limão, canela em pau, água de flor de laranja, cravo etc., e em geral polvilhado de canela. Simples de fazer e uma delicia ',
        vegano: false,
        usuario_id: 5,
        categoria_id: 2,
        dificuldade_id: 1,
      },

      {
        nome: 'Mignon Grelhado ao molho',
        tempo_preparo: 40,
        descricao:
          'O clássico dos restaurantes e dos casamentos preparado na cozinha da sua casa e – o melhor de tudo – em coisa de quinze minutos. Pode marcar o jantar romântico que o cardápio está resolvido. Uma dica: antes de começar, separe todos os ingredientes mesmo. Como o preparo é bem rápido, assim você não corre o risco de se atrapalhar.',
        vegano: false,
        usuario_id: 6,
        categoria_id: 1,
        dificuldade_id: 4,
      },

      {
        nome: 'Macarrão de Batata-doce com Legumes e Cogumelos',
        tempo_preparo: 50,
        descricao:
          'Quer aprender a preparar “japchae” (잡채)? É macarrão coreano com legumes, que pode ser consumido gelado, bem adequado para os dias muito quentes. Este Macarrão de Batata Doce com Cogumelos é a nossa versão do Japchae. Japchae significa (잡) misturado de (채) vegetais, mas pode também ter variações, como adicionando carne, pimenta, frutos do mar, broto de feijão ou com vários tipos de cogumelos. Você mantendo a base da pode criar uma misture de vegetais que lhe agrade e será a sua versão.',
        vegano: false,
        usuario_id: 3,
        categoria_id: 1,
        dificuldade_id: 1,
      },
    ]);
  }
}

module.exports = ReceitaSeeder;
