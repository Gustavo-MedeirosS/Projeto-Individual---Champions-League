var quizModel = require("../models/quizModel");

function consultar(req, res) {

    quizModel.consultar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

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
    var novaPontuacao = req.body.pontuacao;
    // var novaPontuacao = req.params.pontuacao;
    var novaQtdAcertos = req.body.acertos;
    // var idPontuacao = req.params.idPontuacao;
    var idUsuario = req.params.idUsuario;

    quizModel.editar(novaPontuacao, novaQtdAcertos, idUsuario)
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
    consultar
}