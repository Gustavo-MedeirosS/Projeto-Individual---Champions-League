sessionStorage.EMAIL_USUARIO
sessionStorage.NOME_USUARIO
sessionStorage.ID_USUARIO

var quiz = [
    {
        questao: 1,
        enunciado: "Quem é o maior artilheiro da história da Champions League?",
        alternativa1: "Lionel Messi",
        alternativa2: "Cristiano Ronaldo",
        alternativa3: "Zlatan Ibrahimovic",
        alternativa4: "Karim Benzema"
    },
    {
        questao: 2,
        enunciado: "O jogador mais jovem a jogar a Champions é:",
        alternativa1: "Kylian Mbappé",
        alternativa2: "Pedri",
        alternativa3: "Youssoufa Moukoko",
        alternativa4: "Erling Haaland"
    },
    {
        questao: 3,
        enunciado: "Como o troféu da Champions é popularmente chamado?",
        alternativa1: "Taça da Europa",
        alternativa2: "Orelhuda",
        alternativa3: "Taça dos Campeões",
        alternativa4: "Troféu de Prata"
    },
    {
        questao: 4,
        enunciado: "Quantos times participam da fase de grupos da Champions League?",
        alternativa1: "24 times",
        alternativa2: "28 times",
        alternativa3: "32 times",
        alternativa4: "40 times"
    },
    {
        questao: 5,
        enunciado: "Em qual temporada a Champions League foi disputada pela primeira vez?",
        alternativa1: "1955-1956",
        alternativa2: "1960-1961",
        alternativa3: "1974-1975",
        alternativa4: "1992-1993"
    },
    {
        questao: 6,
        enunciado: "O maior vencedor da Champions League é:",
        alternativa1: "Milan",
        alternativa2: "Real Madrid",
        alternativa3: "Barcelona",
        alternativa4: "Bayern de Munique"
    },
    {
        questao: 7,
        enunciado: "Qual o jogador brasileiro com mais gols na Champions League?",
        alternativa1: "Ronaldo",
        alternativa2: "Romário",
        alternativa3: "Ronaldinho Gaúcho",
        alternativa4: "Neymar"
    },
    {
        questao: 8,
        enunciado: "Qual foi a final da Champions 2021/2022?",
        alternativa1: "Liverpool x Manchester City",
        alternativa2: "Liverpool x Real Madrid",
        alternativa3: "Manchester City x Real Madrid",
        alternativa4: "Chelsea x Manchester City"
    },
    {
        questao: 9,
        enunciado: "Qual o jogador com mais títulos na história da Champions League?",
        alternativa1: "Cristiano Ronaldo",
        alternativa2: "Lionel Messi",
        alternativa3: "Paolo Maldini",
        alternativa4: "Francisco Gento"
    },
    {
        questao: 10,
        enunciado: "Qual time venceu a primeira edição da Champions League?",
        alternativa1: "Bayern de Munique",
        alternativa2: "Ajax",
        alternativa3: "Real Madrid",
        alternativa4: "Benfica"
    },
];

var gabarito = ["Cristiano Ronaldo", "Youssoufa Moukoko", "Orelhuda", "32 times", "1955-1956", "Real Madrid", "Neymar", "Liverpool x Real Madrid", "Francisco Gento", "Real Madrid"];

var respostasUsuario = [];

var i = 0;
function iniciarQuiz() {
    var question = `<div id="questao${quiz[i].questao}" class="questao display-block">`
    question += `
    <div class="enunciado">
        <h3>${quiz[i].questao}. ${quiz[i].enunciado}</h3>
    </div>
    <div class="inputs">
        <div class="option">
            <input 
                type="radio" 
                name="option${quiz[i].questao}" 
                id="alternativaA${quiz[i].questao}"
                value="${quiz[i].alternativa1}" ${quiz[i].alternativa1 == respostasUsuario[i] ? "checked" : ""}
            ><label for="alternativaA${quiz[i].questao}">${quiz[i].alternativa1}</label>
        </div>
        <div class="option">
            <input 
                type="radio" 
                name="option${quiz[i].questao}" 
                id="alternativaB${quiz[i].questao}"
                value="${quiz[i].alternativa2}" ${quiz[i].alternativa2 == respostasUsuario[i] ? "checked" : ""}
            ><label for="alternativaB${quiz[i].questao}">${quiz[i].alternativa2}</label>
        </div>
        <div class="option">
            <input 
                type="radio" 
                name="option${quiz[i].questao}" 
                id="alternativaC${quiz[i].questao}"
                value="${quiz[i].alternativa3}" ${quiz[i].alternativa3 == respostasUsuario[i] ? "checked" : ""}
            ><label for="alternativaC${quiz[i].questao}">${quiz[i].alternativa3}</label>
        </div>
        <div class="option">
            <input 
                type="radio" 
                name="option${quiz[i].questao}" 
                id="alternativaD${quiz[i].questao}"
                value="${quiz[i].alternativa4}" ${quiz[i].alternativa4 == respostasUsuario[i] ? "checked" : ""}
            ><label for="alternativaD${quiz[i].questao}">${quiz[i].alternativa4}</label>
        </div>
    </div>
    </div>
    <div class="botoes">
        ${i > 0 ? '<button id="btn_voltar" onclick="voltarQuestao()">Anterior</button>' : ''}
        ${i < quiz.length - 1 ? '<button id="btn_passar" onclick="passarQuestao()">Próxima</button>' : '<button id="btn_passar" onclick="passarQuestao()">Finalizar</button>'}
    </div>
    `;
    div_quiz.innerHTML = question;
}

function passarQuestao() {
    console.log(i);

    var radios = document.getElementsByName(`option${i + 1}`);
    for (var indice = 0; indice < radios.length; indice++) {
        if (radios[indice].checked) {
            if (respostasUsuario[i]) {
                respostasUsuario[i] = radios[indice].value;
            } else {
                respostasUsuario.push(radios[indice].value);
            }
        }
    }

    i++;
    if (i < quiz.length) {
        iniciarQuiz();
    } else {
        finalizarQuiz();
    }

}

function voltarQuestao() {
    i = i - 1;
    iniciarQuiz();
}

function finalizarQuiz() {
    console.log("Entrou no finalizarQuiz()")
    console.log("Subiu todas as respostas")
    
    if (respostasUsuario.length != gabarito.length) {
        swal("Ops", "Pergunta(s) em branco. Por favor, responda todas as perguntas.", "error");
    } else {
        var respostasCertas = 0;
        for (var i = 0; i < respostasUsuario.length; i++) {
            if (respostasUsuario[i] == gabarito[i]) {
                respostasCertas++;
                
            }
        }

        var pontuacao = respostasCertas * 3;    
    
        fetch(`/quiz/publicar/${sessionStorage.ID_USUARIO}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                acertos: respostasCertas,
                pontuacao: pontuacao,
                fkUsuario: sessionStorage.ID_USUARIO
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                swal("Quiz finalizado!", `Você acertou ${respostasCertas} de ${gabarito.length} questões!`, "success");
                // window.location = "/dashboard/mural.html"
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        div_quiz.innerHTML = `
            <p>Clique abaixo e acompanhe o ranking do quiz</p>
            <button class="verRanking" onclick="verRanking()">Ranking</button>
        `;

    }
}

function verRanking() {
    window.location = "ranking.html"
}