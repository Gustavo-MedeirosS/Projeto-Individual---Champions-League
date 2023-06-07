if (sessionStorage.length == 0) {
  nome_usuario.innerHTML = "Entrar";
} else {
  nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
}

var dadosTimes = [
  {
    nome_procurado: "AJAX",
    imagem: "./images/times/ajax.png",
    nome: "Ajax",
    partidas: 6,
    vitorias: 2,
    empates: 0,
    derrotas: 4,
    gols_marcados: 11,
    gols_sofridos: 16,
    cartoes_amarelos: 15,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "ATLÉTICO DE MADRID",
    imagem: "./images/times/atletico-madrid.png",
    nome: "Atlético de Madrid",
    partidas: 6,
    vitorias: 1,
    empates: 2,
    derrotas: 3,
    gols_marcados: 5,
    gols_sofridos: 9,
    cartoes_amarelos: 13,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "BARCELONA",
    imagem: "./images/times/barcelona.png",
    nome: "Barcelona",
    partidas: 6,
    vitorias: 2,
    empates: 1,
    derrotas: 3,
    gols_marcados: 12,
    gols_sofridos: 12,
    cartoes_amarelos: 10,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "BAYER LEVERKUSEN",
    imagem: "./images/times/bayer-leverkusen.png",
    nome: "Bayer Leverkusen",
    partidas: 6,
    vitorias: 1,
    empates: 2,
    derrotas: 3,
    gols_marcados: 4,
    gols_sofridos: 8,
    cartoes_amarelos: 19,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "BAYERN DE MUNIQUE",
    imagem: "./images/times/bayern-munique.png",
    nome: "Bayern de Munique",
    partidas: 10,
    vitorias: 8,
    empates: 1,
    derrotas: 1,
    gols_marcados: 22,
    gols_sofridos: 6,
    cartoes_amarelos: 23,
    cartoes_vermelhos: 2,
  },
  {
    nome_procurado: "BENFICA",
    imagem: "./images/times/benfica.png",
    nome: "Benfica",
    partidas: 10,
    vitorias: 6,
    empates: 3,
    derrotas: 1,
    gols_marcados: 26,
    gols_sofridos: 13,
    cartoes_amarelos: 19,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "BORUSSIA DORTMUND",
    imagem: "./images/times/borussia-dortmund.png",
    nome: "Borussia Dortmund",
    partidas: 8,
    vitorias: 3,
    empates: 3,
    derrotas: 2,
    gols_marcados: 11,
    gols_sofridos: 7,
    cartoes_amarelos: 17,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "BRUGGE",
    imagem: "./images/times/brugge.png",
    nome: "Brugge",
    partidas: 8,
    vitorias: 3,
    empates: 2,
    derrotas: 3,
    gols_marcados: 8,
    gols_sofridos: 11,
    cartoes_amarelos: 27,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "CELTIC",
    imagem: "./images/times/celtic.png",
    nome: "Celtic",
    partidas: 6,
    vitorias: 0,
    empates: 2,
    derrotas: 4,
    gols_marcados: 4,
    gols_sofridos: 15,
    cartoes_amarelos: 7,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "CHELSEA",
    imagem: "./images/times/chelsea.png",
    nome: "Chelsea",
    partidas: 10,
    vitorias: 5,
    empates: 1,
    derrotas: 4,
    gols_marcados: 12,
    gols_sofridos: 9,
    cartoes_amarelos: 25,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "COPENHAGEN",
    imagem: "./images/times/copenhagen.png",
    nome: "Copenhagen",
    partidas: 6,
    vitorias: 0,
    empates: 3,
    derrotas: 3,
    gols_marcados: 1,
    gols_sofridos: 12,
    cartoes_amarelos: 12,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "DINAMO ZAGREB",
    imagem: "./images/times/dinamo-zagreb.png",
    nome: "Dinamo Zagreb",
    partidas: 6,
    vitorias: 1,
    empates: 1,
    derrotas: 4,
    gols_marcados: 4,
    gols_sofridos: 11,
    cartoes_amarelos: 13,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "FRANKFURT",
    imagem: "./images/times/frankfurt.png",
    nome: "Frankfurt",
    partidas: 8,
    vitorias: 3,
    empates: 1,
    derrotas: 4,
    gols_marcados: 7,
    gols_sofridos: 13,
    cartoes_amarelos: 18,
    cartoes_vermelhos: 2,
  },
  {
    nome_procurado: "INTER DE MILÃO",
    imagem: "./images/times/internazionale.png",
    nome: "Inter de Milão",
    partidas: 12,
    vitorias: 7,
    empates: 3,
    derrotas: 2,
    gols_marcados: 19,
    gols_sofridos: 10,
    cartoes_amarelos: 24,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "JUVENTUS",
    imagem: "./images/times/juventus.png",
    nome: "Juventus",
    partidas: 6,
    vitorias: 1,
    empates: 0,
    derrotas: 5,
    gols_marcados: 9,
    gols_sofridos: 13,
    cartoes_amarelos: 14,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "LIVERPOOL",
    imagem: "./images/times/liverpool.png",
    nome: "Liverpool",
    partidas: 8,
    vitorias: 5,
    empates: 0,
    derrotas: 3,
    gols_marcados: 19,
    gols_sofridos: 12,
    cartoes_amarelos: 11,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "MACCABI HAIFA",
    imagem: "./images/times/maccabi-haifa.png",
    nome: "Maccabi Haifa",
    partidas: 6,
    vitorias: 1,
    empates: 0,
    derrotas: 5,
    gols_marcados: 7,
    gols_sofridos: 21,
    cartoes_amarelos: 14,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "MANCHESTER CITY",
    imagem: "./images/times/manchester-city.png",
    nome: "Manchester City",
    partidas: 12,
    vitorias: 7,
    empates: 5,
    derrotas: 0,
    gols_marcados: 31,
    gols_sofridos: 5,
    cartoes_amarelos: 20,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "MILAN",
    imagem: "./images/times/milan.png",
    nome: "Milan",
    partidas: 12,
    vitorias: 5,
    empates: 3,
    derrotas: 4,
    gols_marcados: 15,
    gols_sofridos: 11,
    cartoes_amarelos: 30,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "NAPOLI",
    imagem: "./images/times/napoli.png",
    nome: "Napoli",
    partidas: 10,
    vitorias: 7,
    empates: 1,
    derrotas: 2,
    gols_marcados: 26,
    gols_sofridos: 8,
    cartoes_amarelos: 20,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "OLYMPIQUE MARSEILLE",
    imagem: "./images/times/olympique-marseille.png",
    nome: "Olympique Marseille",
    partidas: 6,
    vitorias: 2,
    empates: 0,
    derrotas: 4,
    gols_marcados: 8,
    gols_sofridos: 8,
    cartoes_amarelos: 11,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "PSG",
    imagem: "./images/times/paris-saint-germain.png",
    nome: "PSG",
    partidas: 8,
    vitorias: 4,
    empates: 2,
    derrotas: 2,
    gols_marcados: 16,
    gols_sofridos: 10,
    cartoes_amarelos: 14,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "PORTO",
    imagem: "./images/times/porto.png",
    nome: "Porto",
    partidas: 8,
    vitorias: 4,
    empates: 1,
    derrotas: 3,
    gols_marcados: 12,
    gols_sofridos: 8,
    cartoes_amarelos: 25,
    cartoes_vermelhos: 3,
  },
  {
    nome_procurado: "RANGERS",
    imagem: "./images/times/rangers.png",
    nome: "Rangers",
    partidas: 6,
    vitorias: 0,
    empates: 0,
    derrotas: 6,
    gols_marcados: 2,
    gols_sofridos: 22,
    cartoes_amarelos: 10,
    cartoes_vermelhos: 1,
  },
  {
    nome_procurado: "LEIPZIG",
    imagem: "./images/times/rb-leipzig.png",
    nome: "Leipzig",
    partidas: 8,
    vitorias: 4,
    empates: 1,
    derrotas: 3,
    gols_marcados: 14,
    gols_sofridos: 17,
    cartoes_amarelos: 8,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "SALZBURG",
    imagem: "./images/times/rb-salzburg.png",
    nome: "Salzburg",
    partidas: 6,
    vitorias: 1,
    empates: 3,
    derrotas: 2,
    gols_marcados: 5,
    gols_sofridos: 9,
    cartoes_amarelos: 11,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "REAL MADRID",
    imagem: "./images/times/real-madrid.png",
    nome: "Real Madrid",
    partidas: 12,
    vitorias: 8,
    empates: 2,
    derrotas: 2,
    gols_marcados: 26,
    gols_sofridos: 13,
    cartoes_amarelos: 15,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "SEVILLA",
    imagem: "./images/times/sevilla.png",
    nome: "Sevilla",
    partidas: 6,
    vitorias: 1,
    empates: 2,
    derrotas: 3,
    gols_marcados: 6,
    gols_sofridos: 12,
    cartoes_amarelos: 13,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "SHAKHTAR DONETSK",
    imagem: "./images/times/shakhtar-donetsk.png",
    nome: "Shakhtar Donetsk",
    partidas: 6,
    vitorias: 1,
    empates: 3,
    derrotas: 2,
    gols_marcados: 8,
    gols_sofridos: 10,
    cartoes_amarelos: 16,
    cartoes_vermelhos: 0,
  },
  {
    nome_procurado: "SPORTING",
    imagem: "./images/times/sporting.png",
    nome: "Sporting",
    partidas: 6,
    vitorias: 2,
    empates: 1,
    derrotas: 3,
    gols_marcados: 8,
    gols_sofridos: 9,
    cartoes_amarelos: 17,
    cartoes_vermelhos: 3,
  },
  {
    nome_procurado: "TOTTENHAM",
    imagem: "./images/times/tottenham.png",
    nome: "Tottenham",
    partidas: 8,
    vitorias: 3,
    empates: 3,
    derrotas: 2,
    gols_marcados: 8,
    gols_sofridos: 7,
    cartoes_amarelos: 22,
    cartoes_vermelhos: 2,
  },
  {
    nome_procurado: "VIKTORIA PLZEN",
    imagem: "./images/times/viktoria-plzen.png",
    nome: "Viktoria Plzen",
    partidas: 6,
    vitorias: 0,
    empates: 0,
    derrotas: 6,
    gols_marcados: 5,
    gols_sofridos: 24,
    cartoes_amarelos: 12,
    cartoes_vermelhos: 1,
  },
];

function buscarTime() {
  var timeDigitado = document.getElementById("time_digitado").value;
  var consultaTimes = "";

  for (var i = 0; i < dadosTimes.length; i++) {
    var pontuacaoMaxima = dadosTimes[i].partidas * 3;
    var pontuacaoAtual = (dadosTimes[i].vitorias * 3) + (dadosTimes[i].empates * 1);
    var aproveitamento = (pontuacaoAtual / pontuacaoMaxima) * 100;
    if (timeDigitado.toUpperCase() == dadosTimes[i].nome_procurado) {
      consultaTimes = `<div id="banner" class="banner">`;
      consultaTimes += `
            <div class="escudo-nome">
            <img src="${dadosTimes[i].imagem}" alt="">
            <span>${dadosTimes[i].nome}</span>
          </div>
        
          <div class="infos">
            <div class="resultados">
              <div class="partidas">
                <span class="numero">${dadosTimes[i].partidas}</span>
                <span class="texto">partidas</span>
              </div>
              <div class="vit-der-emp">
                <span><i class="fa-solid fa-circle fa-xs" style="color: #09c606;"></i>   ${dadosTimes[i].vitorias} vitórias</span>
                <span><i class="fa-solid fa-circle fa-xs" style="color: #afacac;"></i>   ${dadosTimes[i].empates} empates</span>
                <span><i class="fa-solid fa-circle fa-xs" style="color: #e60505;"></i>   ${dadosTimes[i].derrotas} derrotas</span>
              </div>
              <div class="aproveitamento">
                <span class="numero">${parseInt(aproveitamento)} %</span>
                <span class="texto">aproveitamento</span>
              </div>
            </div>
        
            <div class="gols-cartoes">
              <div class="gols">
                <div class="div-caixa">
                  <span class="numero"><i class="fa-regular fa-futbol fa-xs" style="color: #000000;"></i> ${dadosTimes[i].gols_marcados}</span>
                  <span class="texto">gols marcados</span>
                </div>
                <div class="div-caixa">
                  <span class="numero"><i class="fa-regular fa-futbol fa-xs" style="color: #000000;"></i> ${dadosTimes[i].gols_sofridos}</span>
                  <span class="texto">gols sofridos</span>
                </div>
              </div>
        
              <div class="cartoes">
                <div class="div-caixa">
                  <span class="numero"><img style="height: 18px" src="./images/consulta-times-icons/retangulo-amarelo.png" alt""> ${dadosTimes[i].cartoes_amarelos}</span>
                  <span class="texto">cartões amarelos</span>
                </div>
                <div class="div-caixa">
                  <span class="numero"><img style="height: 18px" src="./images/consulta-times-icons/retangulo-vermelho.png" alt""> ${dadosTimes[i].cartoes_vermelhos}</span>
                  <span class="texto">cartões vermelhos</span>
                </div>
              </div>
            </div>
          </div>
        </div> 
            `;

      document.getElementById("consulta-times").innerHTML = consultaTimes;
    }
    }
    if (consultaTimes == "") {
      document.getElementById("consulta-times").innerHTML = "";
      swal("Ops", "Time inválido! Digite uma equipe participante da Champions 2022/23.", "error");
    }
  }