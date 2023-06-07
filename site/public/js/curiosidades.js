if (sessionStorage.length == 0) {
  nome_usuario.innerHTML = "Entrar";
} else {
  nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
}

var listaCuriosidades = [
  {
    descricao:
      "A competição foi criada em 1955 como a Taça dos Clubes Campeões Europeus, com o objetivo de reunir os melhores clubes de futebol da Europa. Foi renomeada como Liga dos Campeões da UEFA em 1992.",
    class_imagem: "imagem-1",
  },
  {
    descricao:
      "O troféu da Liga dos Campeões é conhecido como 'Orelhuda' por causa do design, que conta com duas alças que se assemelham a orelhas. O troféu pesa cerca de 7,5 kg e é feito de prata esterlina.",
    class_imagem: "imagem-2",
  },
  {
    descricao:
      "Cristiano Ronaldo é o jogador com mais gols marcados na Champions League. Ele marcou 141 gols ao longo de sua carreira na competição, jogando pelo Manchester United, Real Madrid e Juventus.",
    class_imagem: "imagem-3",
  },
  {
    descricao: "O Real Madrid é o maior vencedor da história da competição, com 14 títulos. É a única equipe a levantar o troféu 5 vezes consecutivas.",
    class_imagem: "imagem-4",
  },
  {
    descricao: "Youssoufa Moukoko é o jogador mais jovem a disputar uma partida da Champions League. Com 16 anos e 18 dias, ele estreou pelo Borussia Dortmund contra o Zenit em dezembro de 2020.",
    class_imagem: "imagem-5",
  },
  {
    descricao: "O gol mais rápido da Liga dos Campeões foi marcado por Roy Makaay em 2007. Ele abriu o placar para o Bayern de Munique contra o Real Madrid com apenas 10,12 segundos de jogo.",
    class_imagem: "imagem-6",
  },
  {
    descricao: "A maior vitória em uma final ocorreu em 1964, quando o Real Madrid derrotou o Eintracht Frankfurt por 7 a 3. Ferenc Puskàs brilhou na partida, com 4 gols.",
    class_imagem: "imagem-7",
  },
  {
    descricao: "Marco Ballota é o jogador mais velho a atuar na competição. Com 43 anos e 252 dias, o goleiro da Lázio enfrentou o Real Madrid, em julho de 2007.",
    class_imagem: "imagem-8",
  },
  {
    descricao: "Na final de 2008 entre Chelsea e Manchester United, no Estádio Luzhniki, em Moscou (Rússia), foi registrado o maior público de uma final, com  67.310 espectadores.",
    class_imagem: "imagem-9",
  },
  {
    descricao: "A edição de 2018-2019 foi marcada por ter a tecnologia do Árbitro de Vídeo Assistente (VAR) na final entre Tottenham e Liverpool.",
    class_imagem: "imagem-10",
  },
];

function addCuriosidades(descricao, class_imagem) {
  for (var i = 0; i < listaCuriosidades.length; i++) {
    var curiosidade = `<div class="curiosidade">`;
    if (i % 2 == 0) {
      curiosidade += `
            <div class="descricao">
              <span>${listaCuriosidades[i].descricao}</span>
            </div>
    
            <div class="imagem ${listaCuriosidades[i].class_imagem}"></div>
          </div>`;
    } else {
      curiosidade += `
            <div class="imagem ${listaCuriosidades[i].class_imagem}"></div>
    
            <div class="descricao">
              <span>${listaCuriosidades[i].descricao}</span>
            </div>
    
          </div>`;
    }

    document.getElementById("curiosidades").innerHTML += curiosidade;
  }
}
