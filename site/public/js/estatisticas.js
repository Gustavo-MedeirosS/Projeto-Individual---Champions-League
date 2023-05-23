var artilheiros = [
  {
    foto: "./images/jogadores/haaland.jpg",
    nome: "Erling Haaland",
    imagem_time: "./images/times/manchester-city.png",
    nome_time: "Man City",
    qtd: 12,
  },
  {
    foto: "./images/jogadores/salah.jpg",
    nome: "Mohammed Salah",
    imagem_time: "./images/times/liverpool.png",
    nome_time: "Liverpool",
    qtd: 8,
  },
  {
    foto: "./images/jogadores/mbappe.jpg",
    nome: "Kylian Mbappé",
    imagem_time: "./images/times/paris-saint-germain.png",
    nome_time: "PSG",
    qtd: 7,
  },
  {
    foto: "./images/jogadores/vini-jr.jpg",
    nome: "Vinicius Junior",
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
    nome: "Rodrygo Goes",
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
    nome: "Vitor Osimhen",
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
