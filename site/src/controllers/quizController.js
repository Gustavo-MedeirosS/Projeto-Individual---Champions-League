var quizModel = require("../models/quizModel");

function publicar(req, res) {
    var acertos = req.body.acertos;
    var pontuacao = req.body.pontuacao;
    var idUsuario = req.params.idUsuario;

    if (acertos == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (pontuacao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        quizModel.publicar(acertos, pontuacao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novaDescricao = req.body.descricao;
    var idQuiz = req.params.idquiz;

    quizModel.editar(novaDescricao, idQuiz)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    publicar,
    editar,
}