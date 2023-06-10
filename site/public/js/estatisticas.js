sessionStorage.EMAIL_USUARIO
sessionStorage.NOME_USUARIO
sessionStorage.ID_USUARIO

if (sessionStorage.length == 0) {
  nome_usuario.innerHTML = "Entrar";
} else {
  nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
}

// ADICIONAR ARTILHEIROS
var artilheiros = [
  {
    foto: "./images/jogadores/haaland.jpg",
    nome: "Haaland",
    imagem_time: "./images/times/manchester-city.png",
    nome_time: "Man City",
    qtd: 12,
  },
  {
    foto: "./images/jogadores/salah.jpg",
    nome: "Salah",
    imagem_time: "./images/times/liverpool.png",
    nome_time: "Liverpool",
    qtd: 8,
  },
  {
    foto: "./images/jogadores/mbappe.jpg",
    nome: "Mbappé",
    imagem_time: "./images/times/paris-saint-germain.png",
    nome_time: "PSG",
    qtd: 7,
  },
  {
    foto: "./images/jogadores/vini-jr.jpg",
    nome: "Vinicius Jr",
    imagem_time: "./images/times/real-madrid.png",
    nome_time: "Real Madrid",
    qtd: 7,
  },
  {
    foto: "./images/jogadores/joao-mario.jpg",
    nome: "João Mário",
    imagem_time: "./images/times/benfica.png",
    nome_time: "Benfica",
    qtd: 6,
  },
  {
    foto: "./images/jogadores/taremi.jpg",
    nome: "Taremi",
    imagem_time: "./images/times/porto.png",
    nome_time: "Porto",
    qtd: 5,
  },
  {
    foto: "./images/jogadores/rodrygo.jpg",
    nome: "Rodrygo",
    imagem_time: "./images/times/real-madrid.png",
    nome_time: "Real Madrid",
    qtd: 5,
  },
  {
    foto: "./images/jogadores/rafa-silva.jpg",
    nome: "Rafa Silva",
    imagem_time: "./images/times/benfica.png",
    nome_time: "Benfica",
    qtd: 5,
  },
  {
    foto: "./images/jogadores/lewandowski.jpg",
    nome: "Lewandowski",
    imagem_time: "./images/times/barcelona.png",
    nome_time: "Barcelona",
    qtd: 5,
  },
  {
    foto: "./images/jogadores/osimhen.jpg",
    nome: "Osimhen",
    imagem_time: "./images/times/napoli.png",
    nome_time: "Napoli",
    qtd: 5,
  },
];

function addArtilheiros(foto, nome, imagem_time, nome_time, qtd) {
  var artilheiros = `<div class="dados">`;
  artilheiros += `
          <div class="jogador-nome-time">
            <img style="height: 60px;" class="jogador" src="${foto}" alt="">
            <div class="nome-time">
              <h3>${nome}</h3>
              <span> <img src="${imagem_time}" alt=""> ${nome_time}</span>
            </div>
            </div>
            <h1>${qtd}</h1>
        </div>`;

  document.getElementById("infos-artilheiros").innerHTML += artilheiros;
}

for (var i = 0; i < artilheiros.length; i++) {
  addArtilheiros(
    artilheiros[i].foto,
    artilheiros[i].nome,
    artilheiros[i].imagem_time,
    artilheiros[i].nome_time,
    artilheiros[i].qtd
  );
}

// ADICIONAR ASSISTENTES
var assistentes = [
  {
    foto: "./images/jogadores/de-bruyne.jpg",
    nome: "De Bruyne",
    imagem_time: "./images/times/manchester-city.png",
    nome_time: "Man City",
    qtd: 7,
  },
  {
    foto: "./images/jogadores/vini-jr.jpg",
    nome: "Vinicius Jr",
    imagem_time: "./images/times/real-madrid.png",
    nome_time: "Real Madrid",
    qtd: 6,
  },
  {
    foto: "./images/jogadores/dimarco.jpg",
    nome: "Dimarco",
    imagem_time: "./images/times/internazionale.png",
    nome_time: "Inter de Milão",
    qtd: 5,
  },
  {
    foto: "./images/jogadores/joao-cancelo.jpg",
    nome: "João Cancelo",
    imagem_time: "./images/times/bayern-munique.png",
    nome_time: "Bayern",
    qtd: 5,
  },
  {
    foto: "./images/jogadores/messi.jpg",
    nome: "Messi",
    imagem_time: "./images/times/paris-saint-germain.png",
    nome_time: "PSG",
    qtd: 4,
  },
  {
    foto: "./images/jogadores/kvaratskhelia.jpg",
    nome: "Kvaratskhelia",
    imagem_time: "./images/times/napoli.png",
    nome_time: "Napoli",
    qtd: 4,
  },
  {
    foto: "./images/jogadores/grimaldo.jpg",
    nome: "Grimaldo",
    imagem_time: "./images/times/benfica.png",
    nome_time: "Benfica",
    qtd: 4,
  },
  {
    foto: "./images/jogadores/rafael-leao.jpg",
    nome: "Rafael Leão",
    imagem_time: "./images/times/milan.png",
    nome_time: "Milan",
    qtd: 4,
  },
  {
    foto: "./images/jogadores/diogo-jota.jpg",
    nome: "Diogo Jota",
    imagem_time: "./images/times/liverpool.png",
    nome_time: "Liverpool",
    qtd: 4,
  },
  {
    foto: "./images/jogadores/goretzka.jpg",
    nome: "Goretzka",
    imagem_time: "./images/times/bayern-munique.png",
    nome_time: "Bayern",
    qtd: 4,
  }
];

function addAssistentes(foto, nome, imagem_time, nome_time, qtd) {
  var assistentes = `<div class="dados">`;
  assistentes += `
          <div class="jogador-nome-time">
            <img style="height: 60px;" class="jogador" src="${foto}" alt="">
            <div class="nome-time">
              <h3>${nome}</h3>
              <span> <img src="${imagem_time}" alt=""> ${nome_time}</span>
            </div>
            </div>
            <h1>${qtd}</h1>
        </div>`;

  document.getElementById("infos-assistentes").innerHTML += assistentes;
}

for (var i = 0; i < assistentes.length; i++) {
  addAssistentes(
    assistentes[i].foto,
    assistentes[i].nome,
    assistentes[i].imagem_time,
    assistentes[i].nome_time,
    assistentes[i].qtd
  );
}

// ADICIONAR FALTAS COMETIDAS
var faltasCometidas = [
  {
    foto: "./images/jogadores/enzo-fernandez.jpg",
    nome: "Enzo Fernandez",
    imagem_time: "./images/times/chelsea.png",
    nome_time: "Chelsea",
    qtd: 20,
  },
  {
    foto: "./images/jogadores/zambo-anguissa.jpg",
    nome: "Anguissa",
    imagem_time: "./images/times/napoli.png",
    nome_time: "Napoli",
    qtd: 17,
  },
  {
    foto: "./images/jogadores/ugarte.jpg",
    nome: "Ugarte",
    imagem_time: "./images/times/sporting.png",
    nome_time: "Sporting",
    qtd: 16,
  },
  {
    foto: "./images/jogadores/barella.jpg",
    nome: "Barella",
    imagem_time: "./images/times/internazionale.png",
    nome_time: "Inter de Milão",
    qtd: 15,
  },
  {
    foto: "./images/jogadores/hakan-calhanoglu.jpg",
    nome: "Çalhanoglu",
    imagem_time: "./images/times/internazionale.png",
    nome_time: "Inter de Milão",
    qtd: 15,
  },
  {
    foto: "./images/jogadores/bernardo-silva.jpg",
    nome: "Bernardo Silva",
    imagem_time: "./images/times/manchester-city.png",
    nome_time: "Man City",
    qtd: 15,
  },
  {
    foto: "./images/jogadores/james.jpg",
    nome: "Reece James",
    imagem_time: "./images/times/chelsea.png",
    nome_time: "Chelsea",
    qtd: 15,
  },
  {
    foto: "./images/jogadores/sterling.jpg",
    nome: "Sterling",
    imagem_time: "./images/times/chelsea.png",
    nome_time: "Chelsea",
    qtd: 15,
  },
  {
    foto: "./images/jogadores/pavard.jpg",
    nome: "Pavard",
    imagem_time: "./images/times/bayern-munique.png",
    nome_time: "Bayern",
    qtd: 15,
  },
  {
    foto: "./images/jogadores/andrich.jpg",
    nome: "Andrich",
    imagem_time: "./images/times/bayer-leverkusen.png",
    nome_time: "Leverkusen",
    qtd: 15,
  }
];

function addFaltasCometidas(foto, nome, imagem_time, nome_time, qtd) {
  var faltasCometidas = `<div class="dados">`;
  faltasCometidas += `
          <div class="jogador-nome-time">
            <img style="height: 60px;" class="jogador" src="${foto}" alt="">
            <div class="nome-time">
              <h3>${nome}</h3>
              <span> <img src="${imagem_time}" alt=""> ${nome_time}</span>
            </div>
            </div>
            <h1>${qtd}</h1>
        </div>`;

  document.getElementById("infos-faltasCometidas").innerHTML += faltasCometidas;
}

for (var i = 0; i < faltasCometidas.length; i++) {
  addFaltasCometidas(
    faltasCometidas[i].foto,
    faltasCometidas[i].nome,
    faltasCometidas[i].imagem_time,
    faltasCometidas[i].nome_time,
    faltasCometidas[i].qtd
  );
}