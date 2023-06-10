var consultaTimesModel = require("../models/consultaTimesModel");

function publicar(req, res) {
    var nomeTime = req.body.nomeTime;
    var qtdConsulta = req.body.qtdConsulta;
    var idUsuario = req.params.idUsuario;

    if (nomeTime == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (qtdConsulta == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        consultaTimesModel.publicar(nomeTime, qtdConsulta, idUsuario)
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

function exibir(req, res) {
    var novaDescricao = req.body.descricao;
    var idConsultaTimes = req.params.idquiz;

    consultaTimesModel.exibir(novaDescricao, idConsultaTimes)
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
    exibir,
}