if (sessionStorage.length == 0) {
  nome_usuario.innerHTML = "Entrar";
} else {
  nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
}

var carrossel = [
  {
    imagem: "./images/home/sorteio-fase-de-grupos.jpeg",
    legenda: "32 equipes distribuídas em 8 grupos, sendo 4 em cada grupo"
  },
  {
    imagem: "As equipes se enfrentam 2 vezes na fase de grupos, totalizando 6 jogos para cada time",
    legenda: "./images/home/confronto-equipes.jpeg"
  },
  {
    imagem: "./images/home/classificacao-fase-de-grupos.jpg",
    legenda: "As 2 equipes que mais pontuarem em seus grupos se classificam para a fase mata-mata",
  },
  {
    imagem: "./images/home/chaveamento-mata-mata-champions.png",
    legenda: "As fases do mata-mata são: oitavas de final, quartas de final, semifinal e final"
  },
  {
    imagem: "./images/home/foto-classificacao-messi.jpg",
    legenda: "No mata-mata, as equipes se enfrentam em jogo de ida e volta, se classificando quem for vencedor no resultado agregado final ou nos pênaltis, caso haja empate",
  },
  {
    imagem: "./images/home/taca-champions-foto.jpg",
    legenda: "A final é decidida em jogo único e em campo neutro. O vencedor leva a orelhuda pra casa!",
  },
  {
    imagem: "./images/home/taca-mundial-de-clubes.jpg",
    legenda: "O campeão garante vaga no Mundial de Clubes, torneio disputado entre todos os campeões continentais do ano"
  },
];

// function addElement(legenda, imagem) {
//   for (var i = 0; i < carrossel.length; i++) {
//     var conteudo = `<div class="display-block">`;
//     conteudo += `<img src="${imagem}" alt="">`;
//                    `<div class="legenda">`;
//                    `<h1>${legenda}</h1>`;
//                    `</div>`;
//                 `</div>`;
//   }
//   document.getElementById("carrossel").innerHTML += conteudo;
// }

function addElement() {
  var pagina = `<div class="pagina">`;
  if (radio1) {
    pagina += `
    <img src="./images/home/sorteio-fase-de-grupos.jpeg" alt="">
    <p class="legenda">32 equipes distribuídas em 8 grupos, sendo 4 em cada grupo</p>
  </div>`;
  document.getElementById("carrossel").innerHTML = pagina;
  } else if (radio2) {
    pagina += `
    <img src="./images/home/confronto-equipes.jpeg" alt="">
    <p class="legenda">As equipes se enfrentam 2 vezes na fase de grupos, totalizando 6 jogos para cada time</p>
  </div>`;
  document.getElementById("carrossel").innerHTML = pagina;
  }
}

// addElement("32 equipes distribuídas em 8 grupos, sendo 4 em cada grupo", "./images/home/sorteio-fase-de-grupos.jpeg", true);
// addElement("As equipes se enfrentam 2 vezes na fase de grupos, totalizando 6 jogos para cada time", "./images/home/confronto-equipes.jpeg", false);
// addElement("As 2 equipes que mais pontuarem em seus grupos se classificam para a fase mata-mata", "./images/home/classificacao-fase-de-grupos.jpg", false);
// addElement("As fases do mata-mata são: oitavas de final, quartas de final, semifinal e final", "./images/home/chaveamento-mata-mata-champions.png", false);
// addElement("No mata-mata, as equipes se enfrentam em jogo de ida e volta, se classificando quem for vencedor no resultado agregado final ou nos pênaltis, caso haja empate", "./images/home/foto-classificacao-messi.jpg", false);
// addElement("A final é decidida em jogo único e em campo neutro. O vencedor leva a orelhuda pra casa!", "./images/home/taca-champions-foto.jpg", false);
// addElement("O campeão garante vaga no Mundial de Clubes, torneio disputado entre todos os campeões continentais do ano", "./images/home/taca-mundial-de-clubes.jpg", false);

