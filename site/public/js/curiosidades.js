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
  //   {
  //     descricao: "",
  //     class_imagem: "imagem-4",
  //   },
  //   {
  //     descricao: "",
  //     class_imagem: "imagem-5",
  //   },
  //   {
  //     descricao: "",
  //     class_imagem: "imagem-6",
  //   },
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
