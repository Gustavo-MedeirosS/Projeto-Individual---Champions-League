let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 7) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

function addElement(description, imageUrl, isFirst) {
  console.log("Chamou");
  var conteudo = `<div class="slide ${isFirst ? "first" : ""}">`;
  conteudo += `<img src="${imageUrl}" alt="">`;
  conteudo += `<div class="legenda">`;
  conteudo += `<h1>${description}</h1>`;
  conteudo += `</div>`;
  conteudo += `</div>`;
  document.getElementById("carrossel").innerHTML += conteudo;
}

addElement("teste", "../images/home/sorteio-fase-de-grupos.jpeg", true);
addElement("teste", "../images/home/confronto-equipes.jpeg", false);
addElement("teste", "../images/home/classificacao-fase-de-grupos.jpg", false);
addElement("teste", "../images/home/chaveamento-mata-mata-champions.png", false);
addElement("teste", "../images/home/foto-classificacao-messi.jpg", false);
addElement("teste", "../images/home/taca-champions-foto.jpg", false);
addElement("teste", "../images/home/taca-mundial-de-clubes.jpg", false);