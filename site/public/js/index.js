// nome_usuario = sessionStorage.NOME_USUARIO;

function addElement(description, imageUrl, isFirst) {
  console.log("Carrossel pronto");
  var conteudo = `<div class="slide ${isFirst ? "first" : ""}">`;
  conteudo += `<img src="${imageUrl}" alt="">`;
  conteudo += `<div class="legenda">`;
  conteudo += `<h1>${description}</h1>`;
  conteudo += `</div>`;
  conteudo += `</div>`;
  document.getElementById("carrossel").innerHTML += conteudo;
}

addElement("32 equipes distribuídas em 8 grupos, sendo 4 em cada grupo", "./images/home/sorteio-fase-de-grupos.jpeg", true);
addElement("As equipes se enfrentam 2 vezes na fase de grupos, totalizando 6 jogos para cada time", "./images/home/confronto-equipes.jpeg", false);
addElement("As 2 equipes que mais pontuarem em seus grupos se classificam para a fase mata-mata", "./images/home/classificacao-fase-de-grupos.jpg", false);
addElement("As fases do mata-mata são: oitavas de final, quartas de final, semifinal e final", "./images/home/chaveamento-mata-mata-champions.png", false);
addElement("No mata-mata, as equipes se enfrentam em jogo de ida e volta, se classificando quem for vencedor no resultado agregado final ou nos pênaltis, caso haja empate", "./images/home/foto-classificacao-messi.jpg", false);
addElement("A final é decidida em jogo único e em campo neutro. O vencedor leva a orelhuda pra casa!", "./images/home/taca-champions-foto.jpg", false);
addElement("O campeão garante vaga no Mundial de Clubes, torneio disputado entre todos os campeões continentais do ano", "./images/home/taca-mundial-de-clubes.jpg", false);

