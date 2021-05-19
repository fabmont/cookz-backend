'use strict'

/*
|--------------------------------------------------------------------------
| 600ModoPreparoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const ModoPreparo = use('App/Models/ModoPreparo')

class ModoPreparoSeeder {
  async run () {

    await ModoPreparo.createMany([
      {
        id: 1,
        descricao: '1 - Coloque numa tigela a farinha de milho fina e o cacau em pó, 2 - Misture e reserve, 3 - Numa panela, em banho-maria, derreta o chocolate meio amargo picado com a manteiga sem sal cortada em cubos, 4 - Retire do fogo, 5 - Adicione o suco de gengibre e misture, 6 - Acrescente a mistura de farinha com cacau em pó (reservada acima). Misture bem e reserve, 7 - Numa batedeira, coloque os ovos e o açúcar. Bata bem até dobrar de volume, 8 - Com a batedeira ainda ligada, adicione o fermento em pó e bata até misturar, 9 - Desligue a batedeira. Acrescente a mistura de chocolate (reservada acima) e as nozes picadas. Misture, 10 - Transfira a massa para uma assadeira retangular (18 cm X 30 cm) untada e forrada com papel manteiga, 11 - Leve para assar em forno médio pré-aquecido a 180°C por +/- 40 minutos, 12 - Retire do forno, 13 - Cubra o brownie com papel manteiga, 14 - Coloque outra assadeira do mesmo tamanho pressionando levemente o brownie para que fique mais compacto e úmido, 15 - Deixe por +/- 4 horas na geladeira, 16 - Retire a assadeira de cima do brownie, desenforme, corte em quadrados e sirva em seguida',
        id_receita: 1
      },
      {
        id: 2,
        descricao: '1 - Tempere o peixe com sal e pimenta-do-reino e deixe pegar gosto por duas horas na geladeira, 2 - Em uma frigideira antiaderente (de preferência com tampa), coloque um fio de azeite e frite o peixe, 3 - Em outra frigideira, coloque as bananas partidas ao meio no sentido do comprimento e doure-as com a margarina. Reserve, 4 - Em uma forma refratária, monte da seguinte forma: uma camada de peixe, uma camada de banana, uma camada de queijo e repita novamente, 5 - Polvilhe com canela e levemente com açúcar. Leve ao forno a 220 graus. Espere o queijo derreter e sirva imediatamente',
        id_receita: 2
      },
      {
        id: 3,
        descricao: '1 - Coloque em uma tigela 5 dentes de alho amassados, 4 cebolas picadas, 1 pimentão verde picado, 4 tomates picados, ½ maço de coentro picado, ½ maço de cebolinha picado, pimenta-do-reino e sal a gosto, 20 ml de vinagre de maçã, 1 colher (sobremesa) de açúcar, 2 colheres (sopa) de extrato de tomate, 1 kg de filé mignon, misture e deixe marinar por 2 horas, 3 - Em uma frigideira com óleo bem quente coloque o filé mignon (já temperado e sem a marinada) e sele bem toda a carne. Retire a carne da frigideira, transfira para uma assadeira e leve ao forno médio preaquecido a 180°C por cerca de 10 minutos, 4 - Na mesma frigideira, adicione os temperos da marinada e refogue bem. Retire do fogo e reserve, 5 - ARROZ - Em uma panela com 2 colheres (sopa) de óleo refogue 1 cebola picada. Adicione 2 xícaras (chá) de arroz branco, 500 ml de água e deixe cozinhar até secar toda a água do arroz. Retire do fogo e reserve, 6 - BATATA - Coloque em uma assadeira 500 g de batata inglesa sem casca, cozida e cortada em cubos, 1 cebola picada, 1 dente de alho amassado, 100 g de bacon picado, 50 g de azeitona verde sem caroço, folhas de manjericão a gosto cubra com papel alumínio e leve ao forno médio preaquecido a 180°C por cerca de 25 minutos. Retire o papel-alumínio, polvilhe 50 g de queijo parmesão ralado e deixe no forno até gratinar. Retire do forno e reserve, QUIBEBE - Em uma frigideira com 10 ml de azeite refogue 1 cebola picada com 1 dente de alho amassado, pimenta-do-reino e sal a gosto. Adicione 400 g de abóbora cozida e amassada e misture bem. Acrescente 50 ml de leite de coco, 100 g de creme de leite de caixinha e misture até engrossar e formar uma massa. Retire do fogo, misture coentro picadinho a gosto e reserve, 8 - MONTAGEM - Em pratos de servir coloque 2 colheres (sopa) de arroz, 1 colher (sopa) de quibebe, uma porção de batata gratinada e 3 fatias de rosbife com uma porção da marinada refogada (reservada acima). Sirva a seguir',
        id_receita: 3
      },
      {
        id: 4,
        descricao: '1 - Em uma tigela grande, dissolva 1 envelope de fermento seco em 300 ml de água morna. Adicione, 1 colher (sopa) de açúcar, 1 colher (chá) de sal, 1 xícara (café) de óleo e misture. Acrescente, aos poucos, 550 g de farinha de trigo e sove bem a massa. Em seguida deixe crescer dentro de uma tigela coberta com pano por cerca de 1 hora ou até dobrar de volume, 2 - Divida a massa em 12 bolinhas iguais e faça discos não muito finos (24 cm de diâmetro) com auxílio de um rolo. Coloque um disco no prato do micro-ondas e leve ao forno micro-ondas por 30 segundos em potência alta, 3 - Em seguida, vire o disco e leve por mais 30 segundos na mesma potência. Repita o mesmo procedimento com o restante dos discos. Sirva em seguida, 4 - Para fazer torrada: após tirar a massa do micro-ondas, com ajuda de uma faca marque as fatias superficialmente na massa e tempere a gosto (sal grosso, alecrim, páprica, pimenta caiena, pimenta do reino moída, azeite). Leve novamente ao micro-ondas em potência alta de 1 em 1 minuto até ficar crocante (cerca de 2 a 3 minutos). Sirva em seguida',
        id_receita: 4
      },
      {
        id: 5,
        descricao: '1 - Coloque o polvo in natura em panela de pressão com uma cebola grande apenas. Após ferver, deixe 7 minutos e retire do fogo, 2 - Retire o polvo e corte os tentáculos do polvo em pedaços de 1cm x 1cm aproximadamente e reserve. Despreze a cebola e reserve o caldo do polvo. Refogue a cebola picada com o alho em uma colher de manteiga, junte o polvo, a azeitona e um pouco do caldo do polvo. Tempere com sal e pimenta-do-reino, 3 - Finalize com o coentro e o tomate picado. Retire do fogo e reserve, 4 - Corte os pães pela metade e sem casca. Misture a manteiga com as raspas de limão siciliano e passe nos pães. Leve ao forno por 4 minutos até dourar. Retire do forno, 5 - Para montagem do prato: coloque o mix de folhas, das maiores para as menores e de forma colorida. Coloque o vinagrete de polvo e, para finalizar, as amêndoas, as passas e a torrada ao lado. Sirva em seguida',
        id_receita: 5
      },
      {
        id: 6,
        descricao: '1 - Coloque em uma tigela 1 xícara (chá rasa) de farinha de trigo, 2 colheres (sopa) de amido de milho, misture e reserve. Em uma panela coloque ¼ xícara (chá) de manteiga, 1 xícara (chá) de água, 8 paçocas esfareladas e leve ao fogo médio até ferver, 2 - Adicione a mistura de farinha com amido e misture até soltar do fundo da panela. Retire do fogo, transfira a mistura para uma tigela, acrescente 3 ovos, um a um, misturando bem com uma colher de pau a cada adição, 3 - Transfira a massa (feita acima) para um saco de confeiteiro com o bico 32. Unte o lado de fora de 14 forminhas de empada (7 cm de diâmetro na parte superior X 4,5 cm de diâmetro na parte inferior X 3 cm de altura) e vire as forminhas com a boca para baixo. Coloque a ponta do saco de confeiteiro na borda da forminha de empada, vá apertando o saco e cobrindo toda superfície da empadinha, de baixo para cima, cobrindo toda a forminha e formando as cestinhas, 4 - Disponha as forminhas numa assadeira e leve para o freezer por cerca de 2 horas ou até congelar. Retire do freezer, desenforme as cestinhas com ajuda de uma faca sem ponta e frite-as em óleo quente até dourar. Retire e escorra em papel absorvente com a boca virada para baixo, 5 - Passe as cestinhas em uma mistura de canela com açúcar e sirva em seguida com 1 bola de sorvete e calda de doce de leite, 6 - CALDA DE DOCE DE LEITE - Em uma tigela misture com um batedor de arame 400 g de doce de leite com ½ xícara (chá) de leite morno até ficar uma calda lisa. Sirva com a cestinha',
        id_receita: 6
      },
      {
        id: 7,
        descricao: '1 - Em uma batedeira coloque 3 ovos e 3 gemas e bata bem por uns 5 minutos até formar uma espuma cremosa. Adicione 180 g de manteiga derretida, 120 g de açúcar, 120 g de chocolate em pó e bata até formar uma mistura homogênea. Desligue a batedeira, acrescente 120 g de nozes moídas grosseiramente e 180 g de biscoito doce sem recheio moído e misture bem, 2 - Transfira a massa para uma assadeira retangular (35 cm x 20 cm) forrada com papel filme e espalhe bem. Leve ao freezer por 1 hora. Depois de 1 hora, retire do freezer e com uma colher de sopa, pegue pequenas porções da massa e modele, nas mãos, dando o formato de dadinho (com uns 2 cm de lateral), 3 - Passe cada dadinho em 50 g de biscoito doce (sem recheio) moído misturado com 50 g de açúcar. Sirva em seguida. DICA: Caso faça os dadinhos com antecedência, deixe-os na geladeira até o momento de servir',
        id_receita: 7
      },
      {
        id: 8,
        descricao: '1 - Bata no liquidificador, aos poucos, a rosquinha até obter uma farofa. Reserve. Bata também no liquidificador o milho verde com 150ml de água, 2 - Passe na peneira e volte ao liquidificador, junte o óleo, os ovos e bata bem. Passe para uma tigela, junte o açúcar e a rosquinha reservada e misture bem. Acrescente o fermento e misture delicadamente, 3 - Coloque numa forma com furo central (média) untada e enfarinhada. Leve ao forno (médio) pré-aquecido por 40 minutos ou até espetar um palito, sair seco. Deixe amornar um pouco, desenforme e polvilhe com o açúcar de confeiteiro. Sirva logo em seguida',
        id_receita: 8
      },
      {
        id: 9,
        descricao: '1 - Em uma panela coloque o caldo de frango, páprica picante, sal e pimenta do reino a gosto, alecrim e sálvia picadinhos a gosto, 1 litro de água e leve ao fogo alto até ferver, 2 - Adicione as sobrecoxas com pele, congeladas, abaixe o fogo e deixe cozinhar por 45 minutos em fogo médio. Retire as sobrecoxas com uma escumadeira, remova as peles, coloque as sobrecoxas numa assadeira e leve ao forno alto, 250°C, por 15 minutos, 3 - Deixe uma tigela pequena dentro de outra tigela maior e com gelo, dentro do freezer por 1 hora. Despeje o caldo que se formou na panela dentro da tigela pequena que ficou gelando no freezer, coloque, espere 1 minuto e com uma escumadeira retire a gordura que se formar na superfície do caldo, 4 - Volte o caldo para a panela e deixe ferver. Adicione 1 pão francês amanhecido ralado e misture até engrossar e desligue o fogo, 5 - Transfira o caldo para o liquidificador e bata bem até formar um creme liso. Volte o creme batido do liquidificador para a panela, adicione as sobrecoxas assadas e deixe ferver por 5 minutos para encorpar. Sirva em seguida',
        id_receita: 9
      },
      {
        id: 10,
        descricao: '1 - Cozinhe as batatas Asterix com casca em água quente até que fiquem cozidas (30 minutos). Retire as cascas e passe as batatas por um espremedor de batatas. Deixe que esfriem, 2 - Em uma tigela, coloque as batatas cozidas e frias e passadas pelo espremedor, manteiga, fécula de batata, sal a gosto e queijo provolone ralado fino até formar uma massa lisa. Coloque a massa (feita acima) entre 2 sacos plásticos e abra-a bem até ficar fina, 3 - Transfira para uma assadeira de ponta cabeça. Com uma faca ou carretilha, corte a massa em retângulos ou quadrados pequenos e leve para assar no forno alto pré-aquecido a 200°C por cerca de 30 minutos ou até dourar. Retire do forno e deixe esfriar. Sirva em seguida',
        id_receita: 10
      },
      {
        id: 11,
        descricao: '1 - Em uma panela coloque o arroz, água, açúcar, cravos-da-índia e o pedaço de canela em pau e leve ao fogo médio até ferver, 2 - Mantenha a fervura e deixe o arroz cozinhar (aprox. 15 minutos). Adicione 1 ⁄ 2 litro de leite e 1 xícara (chá) de açúcar, misture e deixe ferver, 3 - Apague o fogo e deixe esfriar. Acrescente 1 ⁄ 2 lata de leite condensado, misture e sirva em seguida polvilhado com canela em pó',
        id_receita: 11
      },
      {
        id: 12,
        descricao: '1 - MEDALHÃO - Numa frigideira com azeite grelhe 5 medalhões de filé mignon temperados com sal e pimenta do reino a gosto. Retire do fogo e sirva em seguida, 2 - MOLHO DO CHEF - Num liquidificador, coloque 1 vidro de mostarda, 100g de alcaparras, 100g de champignon, 1 vidro de molho inglês, azeite a gosto e bata até obter uma mistura. Desligue o liquidificador e utilize em seguida decorando com salsa crespa, 3 - RISOTO - 1° - Numa tigela coloque 2 tabletes de caldo de carne dissolvidos em 1,2 litro de água fervente, o funghi secchi e deixe hidratar por +/- 30 minutos. Transfira o funghi para uma peneira. Reserve o caldo e o funghi, 2° - Com uma faca corte o funghi em pedaços pequenos. Coloque metade do funghi picado com metade do caldo (reservado acima) num liquidificador e bata até ficar homogêneo. Misture com a outra parte do funghi picado e o restante do caldo. Reserve, 3° - Refogue em 2 colheres (sopa) de azeite, 3 cebolas picadas, 2 dentes de alho amassados. Adicione 1 kg de arroz arbóreo e misture bem. Junte, aos poucos, o caldo do funghi (reservado acima) até o arroz ficar cozido. Acrescente 100g de champignon, 2 litros de creme de leite fresco, tempere com sal e pimenta do reino a gosto e misture. Em pratos de servir coloque uma porção de risoto, salpique queijo parmesão ralado e sirva em seguida com mignon grelhado com molho do chef e o mix de folhas, 4 - MIX DE FOLHAS - Numa tigela, coloque as folhas de 1 pé de alface roxa, de 1 pé de alface americana, de 1 maço de rúcula tempere com azeite, sal e pimenta-do-reino. Decore com 50g de pimenta biquinho e sirva em seguida.',
        id_receita: 12
      },
      {
        id: 13,
        descricao: '1 - Numa panela com bastante água fervente adicione o macarrão de batata doce e cozinhe por 5 minutos. Retire o macarrão da água quente e coloque numa tigela com água e bastante gelo para resfriar e parar o cozimento. Reserve, 2 - Aqueça uma frigideira em fogo alto com um fio de azeite, coloque as cebolas e refogue até dourar, tempere com sal. Retire da frigideira e reserve. Repita o mesmo processo com as cenouras, as abobrinhas, o pimentão e os cogumelos, 3 - Escorra o macarrão, coloque num refratário, adicione os legumes (feitos acima), tempere com o óleo de gergelim, o shoyu e misture bem. Sirva em seguida',
        id_receita: 13
      },
      ])
  }
}

module.exports = ModoPreparoSeeder
