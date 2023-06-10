var consultaTimesModel = require("../models/consultaTimesModel");

function publicar(req, res) {
    var nomeTime = req.body.nomeTime;
    var idUsuario = req.params.idUsuario;

    if (nomeTime == undefined) {
        res.status(400).send("O time está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        consultaTimesModel.publicar(nomeTime, idUsuario)
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

    consultaTimesModel.exibir().then(function (resultado) {
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

module.exports = {
    publicar,
    exibir,
}