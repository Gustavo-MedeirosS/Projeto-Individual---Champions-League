var listaNoticias = [];

var noticia1 = {
  idNoticia: "noticia1",
  imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=1920,height=undefined,quality=75/uploads/2023/04/05/642d5ea7d648c.jpeg",
  assunto: "final longe da Europa?",
  manchete: "Presidente da UEFA fala sobre jogos da Champions serem sediados nos EUA",
  descricao: "Em entrevista ao portal americano 'Men in Blazers', Aleksander Ceferin, falou sobre a possibilidade de ver os EUA sediando jogos da Champions League no território. 'É possível ver a Champions nos EUA. Nós começamos a discutir sobre isso, vamos ver. O futebol é muito popular nos Estados Unidos hoje em dia, então é bem possível', disse Ceferin."
};
listaNoticias.push(noticia1);

for (i = 0; i < listaNoticias.length; i++) {
  var noticia = `<div class="noticia" id="${listaNoticias[i].idNoticia}">`;
  noticia += ` <div class="imagem">
            <img src="${listaNoticias[i].imagem}" alt="">
          </div>
          <div class="conteudo">
            <h4>${listaNoticias[i].assunto}</h4>
            <span class="manchete">${listaNoticias[0].manchete}</span>
            <span class="descricao">${listaNoticias[0].descricao}</span>
          </div>
        </div>
    `;
}

document.getElementById("noticias").innerHTML += noticia;
function addNoticias(idNoticia, imagem, assunto, manchete, descricao) {
  console.log("Notícias adicionadas");

}

console.log(listaNoticias)

addNoticias(noticia1.idNoticia, noticia1.imagem, noticia1.assunto, noticia1.manchete, noticia1.descricao);

// addNoticias(
//   "noticia1",
//   "https://lncimg.lance.com.br/cdn-cgi/image/width=1920,height=undefined,quality=75/uploads/2023/04/05/642d5ea7d648c.jpeg",
//   "final longe da Europa?",
//   "Presidente da UEFA fala sobre jogos da Champions serem sediados nos EUA",
//   "Em entrevista ao portal americano 'Men in Blazers', Aleksander Ceferin, falou sobre a possibilidade de ver os EUA sediando jogos da Champions League no território. 'É possível ver a Champions nos EUA. Nós começamos a discutir sobre isso, vamos ver. O futebol é muito popular nos Estados Unidos hoje em dia, então é bem possível', disse Ceferin."
// );

// addNoticias(
//   "noticia2",
//   "https://s2.glbimg.com/uGZg63jxuUsPIj15DFncbvjmpfE=/0x0:4408x2912/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/6/w/WnLDcbTn2AoosfewKA5A/2021-11-07t202337z-916260872-up1ehb71knb1u-rtrmadp-3-soccer-italy-mil-int-report.jpg",
//   "clássico italiano",
//   "Milan e Inter de Milão se reencontram em semifinal de Champions League após 20 anos",
//   "Há 20 anos, dois clubes italianos não chegavam juntos à semifinal, e desta vez, os mesmos repetem o cenário. Em 2002/03, as partidas terminaram com dois empates, em 0 a 0 e 1 a 1. Na época havia classificação pelo critério de gol fora de casa, mas há um fato curioso: as equipes dividem o mesmo estádio, o San Siro, e foi o Milan que se classificou por levar o desempate 'jogando fora de casa'."
// );

// addNoticias(
//   "noticia3",
//   "https://s2.glbimg.com/6Qcb6NO8lhDm9FyvoOXEFUtf4Pk=/0x0:1024x683/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/I/K/czXIGASZWfH7s2AOPTRQ/gettyimages-1335758432.jpg",
//   "artilharia brasileira",
//   "Vinícius Junior ultrapassa Ronaldo em gols na Champions League",
//   "Com a marca de 15 gols, Vini Jr passou Ronaldo em lista dos brasileiros artilheiros na competição. O ranking conta com: Neymar (45), Kaká (30), Rivaldo (27), Jardel (25), Elber (24), Firmino (22), Luiz Adriano (21), Romário (20), Gabriel Jesus (20), Ronaldinho (18), Juninho Pernambuco (18), Willian (18), Hulk (17), Roberto Carlos (16) e Vinicius Jr (15)."
// );

// addNoticias(
//   "noticia4",
//   "https://s2-ge.glbimg.com/UtWRjsRgAx481Klhf4EixCkvYw4=/0x0:1286x832/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/M/P/vYsHT0ToqMkXBnyM3sWQ/city.png",
//   "camisa alternativa",
//   "Por que o Manchester City tem uma camisa preto e vermelha?",
//   "O Manchester City é o clube azul de sua cidade, porém nesta temporada a camisa alternativa foi feita nas cores vermelho e preto. A inspiração para os Citizens foi o Milan. A primeira vez que o Manchester City usou rubro-negro foi em outubro de 1968. A ideia foi do técnico Malcom Allison: “Ele tinha visto aquele time brilhante do Milan, do final da década de 1960, vestindo aquela camisa”, diz Tommy Booth, ex-jogador do clube."
// )

// addNoticias(
//   "noticia5",
//   "https://s2-g1.glbimg.com/aCInDoS08hHl0jKo9mQTcoLwtPs=/0x0:3400x2267/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/p/d/nf1Fe7TR62avuPLf0Z7g/ap23126495084267.jpg",
//   "hino da Champions na coroação do Rei?",
//   "'Hino' da Champions toca na coroação do Rei Charles III e chama atenção dos fanáticos da competição",
//   "O hino executado durante a coroação do Rei Charles III, em Londres, chamou a atenção pela semelhança com a música oficial da Champions League. O hino tocado não foi o da competição europeia, mas sim 'Zadok the Priest', criada em 1727 para a coroação do Rei George II. Já a música da Champions, foi uma adaptação do hino feita em 1992, e se tornou uma marca da competição."
// )

// addNoticias(
//   "noticia6",
//   "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.somosfanaticos.fans%2Fwebp%2Fbr%2Ffull%2FSFBR_20230509_SFBR_590_Luis-Figo-scaled-e1683645486412.webp&width=1200&height=740",
//   // "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=NzliXCkX1sLiLG9zmnNmLb3RjBPdPKQt+g6Nzi/GksFIPUbrpgz9cbQ/AgxFdLmnQF5dBe8ogvVQiuvF91EQq5dWeK/F3sHARXHe0Seh0suBkG4=",
//   "pintou o campeão?",
//   "Figo vê City pronto para ser campeão, mas diz: 'Real está vivo até o último segundo'",
//   "Em coletiva de imprensa realizada na segunda-feira, em Paris, pelo Prêmio Laureus, Luis Figo afirmou que o City está pronto para ser campeão, porém, ressaltou a tradição do Real Madrid, maior campeão da Champions. Vale lembrar que na edição passada o Manchester City foi eliminado pelo próprio Real Madrid, na fase semifinal."
// )

// addNoticias(
//   "noticia7",
//   "https://s2-ge.glbimg.com/VCophJmpROy7ai3pC355i-MGFtg=/0x0:3400x2267/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/8/p/IxxWb4RmK2JYCBwuFagw/gettyimages-1252914466.jpg",
//   "xiii...",
//   "Rafael Leão sofre estiramento e vira dúvida para clássico na Champions",
//   "Rafael Leão sofreu um estiramento muscular na coxa direita logo no início do jogo do Milan contra a Lazio, pelo Campeonato Italiano. Ele agora é dúvida para o confronto contra a Inter de Milão pela semifinal da Champions League. O atacante será reavaliado diariamente e passará por tratamento intesivo para se recuperar para a decisão."
// )

// addNoticias(
//   "noticia8",
//   "https://s2.glbimg.com/6wtY_sXAQsz3RyvZpj8hlybBmEY=/0x0:2000x1264/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2015/02/24/taca-championsleague-reu.jpg",
//   "fortuna!",
//   "Liberado os valores de premiação para o campeão da Champions League na temporada 2022/23",
//   "As equipes que disputam a Champions recebem premiação conforme avançam na competição. O campeão fatura R$ 111 milhões e o vice-campeão R$ 86 milhões. A premiação se refere a 55% do total distribuído pela Uefa. O restante é repassado aos clubes de acordo com a fase atingida ao longo do torneio e são calculados somente no fim da Liga dos Campeões."
// )

// addNoticias(
//   "noticia9",
//   "https://s2.glbimg.com/-mmaHh2K5peDBccMwqOzOL3NHE8=/0x0:3698x2466/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/h/V/ka2Q77SLGfABPFsZIUqg/c895fc37c1d2ff9c3804491fb86158980b2f79f3.jpg",
//   "imparável!",
//   "Vinicius Junior é o melhor driblador jovem no mundo, aponta estudo",
//   "Estudo do CIES Football Observatory apontou Vinicius Junior como o melhor driblador jovem (sub-23) no mundo. O levantamento divulgado nesta quarta-feira levou em consideração jogadores com mais de 1500 minutos nas ligas nacionais no último ano. Atacante do Real Madrid e da seleção brasileira fica em primeiro lugar no ranking, com um drible bem sucedido a cada 15 minutos e 32 segundos. "
// )

// addNoticias(
//   "noticia10",
//   "https://s2.glbimg.com/bS1EDyncv1XtxR8NIBaYzlDol7Y=/0x0:2113x1409/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/8/f/JLCh8mQGec0nT61HxWng/gettyimages-1234831477.jpg",
//   "recorde atrás de recorde",
//   "Guardiola é primeiro técnico a atingir 10ª semifinal de Champions League",
//   "Guardiola conseguiu classificar o Manchester City para a terceira semifinal consecutiva de Champions League. Antes, ele havia chegado a essa mesma fase nas quatro temporadas em que comandou o Barcelona - por lá ganhou seus dois títulos do torneio, em 2009 e 2011 - e nas três temporadas com o Bayern de Munique. Pelos Citizens, o máximo que o treinador espanhol conseguiu foi o vice-campeonato em 2021."
// )