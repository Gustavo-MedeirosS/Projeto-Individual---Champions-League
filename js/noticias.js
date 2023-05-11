var listaNoticias = [];

function addNoticias(idNoticia, imagem, assunto, manchete, descricao) {
  console.log("Notícias adicionadas");
  var noticia = `<div class="noticia" id="${idNoticia}">`;
  noticia += ` <div class="imagem">
            <img src="${imagem}" alt="">
          </div>
          <div class="conteudo">
            <h4>${assunto}</h4>
            <span class="manchete">${manchete}</span>
            <span class="descricao">${descricao}</span>
          </div>
        </div>
    `;

  document.getElementById("noticias").innerHTML += noticia;

  listaNoticias.push(noticia1.idNoticia);
}

function verMaisNoticias() {

}

addNoticias(
  "noticia1",
  "https://lncimg.lance.com.br/cdn-cgi/image/width=1920,height=undefined,quality=75/uploads/2023/04/05/642d5ea7d648c.jpeg",
  "final longe da Europa?",
  "Presidente da UEFA fala sobre jogos da Champions serem sediados nos EUA",
  "Em entrevista ao portal americano 'Men in Blazers', Aleksander Ceferin, falou sobre a possibilidade de ver os EUA sediando jogos da Champions League no território. 'É possível ver a Champions nos EUA. Nós começamos a discutir sobre isso, vamos ver. O futebol é muito popular nos Estados Unidos hoje em dia, então é bem possível', disse Ceferin."
);

addNoticias(
  "noticia2",
  "https://images2.minutemediacdn.com/image/upload/c_crop,w_6000,h_3375,x_0,y_73/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_pt-BR_international_web/01gpzt54skkr713fm5tg.jpg",
  "clássico italiano",
  "Milan e Inter de Milão se reencontram em semifinal de Champions League após 20 anos",
  "Há 20 anos, dois clubes italianos não chegavam juntos à semifinal, e desta vez, os mesmos repetem o cenário. Em 2002/03, as partidas terminaram com dois empates, em 0 a 0 e 1 a 1. Na época havia classificação pelo critério de gol fora de casa, mas há um fato curioso: as equipes dividem o mesmo estádio, o San Siro, e foi o Milan que se classificou por levar o desempate 'jogando fora de casa'."
);

addNoticias(
  "noticia3",
  "https://imagens.ebc.com.br/n0-xgr_gIOS59E3DJ3-fQZnIczI=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/vinicius_junior_real_madrid.jpg?itok=-J5FEI8M",
  "artilharia brasileira",
  "Vinícius Junior ultrapassa Ronaldo em gols na Champions League",
  "Com a marca de 15 gols, Vini Jr passou Ronaldo em lista dos brasileiros artilheiros na competição. O ranking conta com: Neymar (45), Kaká (30), Rivaldo (27), Jardel (25), Elber (24), Firmino (22), Luiz Adriano (21), Romário (20), Gabriel Jesus (20), Ronaldinho (18), Juninho Pernambuco (18), Willian (18), Hulk (17), Roberto Carlos (16) e Vinicius Jr (15)."
);

addNoticias(
  "noticia4",
  "https://estaticos-cdn.sport.es/clip/e69c980a-0a79-4462-8a44-1b785508d85d_alta-libre-aspect-ratio_default_0.jpg",
  "camisa alternativa",
  "Por que o Manchester City tem uma camisa preto e vermelha?",
  "O Manchester City é o clube azul de sua cidade, porém nesta temporada a camisa alternativa foi feita nas cores vermelho e preto. A inspiração para os Citizens foi o Milan. A primeira vez que o Manchester City usou rubro-negro foi em outubro de 1968. A ideia foi do técnico Malcom Allison: “Ele tinha visto aquele time brilhante do Milan, do final da década de 1960, vestindo aquela camisa”, diz Tommy Booth, ex-jogador do clube."
)

addNoticias(
  "noticia5",
  "https://s2-g1.glbimg.com/aCInDoS08hHl0jKo9mQTcoLwtPs=/0x0:3400x2267/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/p/d/nf1Fe7TR62avuPLf0Z7g/ap23126495084267.jpg",
  "hino da Champions na coração do Rei?",
  "'Hino' da Champions toca na coroação do Rei Charles III e chama atenção dos fanáticos da competição",
  "O hino executado durante a coroação do Rei Charles III, em Londres, chamou a atenção pela semelhança com a música oficial da Champions League. O hino tocado não foi o da competição europeia, mas sim 'Zadok the Priest', criada em 1727 para a coroação do Rei George II. Já a música da Champions, foi uma adaptação do hino feita em 1992, e se tornou uma marca da competição."
)

addNoticias(
  "noticia6",
  "",
  "",
  "",
  ""
)

addNoticias(
  "noticia7",
  "",
  "",
  "",
  ""
)

addNoticias(
  "noticia8",
  "",
  "",
  "",
  ""
)

addNoticias(
  "noticia9",
  "",
  "",
  "",
  ""
)

addNoticias(
  "noticia10",
  "",
  "",
  "",
  ""
)