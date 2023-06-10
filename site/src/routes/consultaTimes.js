var express = require("express");
var router = express.Router();

var consultaTimesController = require("../controllers/consultaTimesController");

router.post("/publicar/:idUsuario", function (req, res) {
    consultaTimesController.publicar(req, res);
});

router.get("/editar/ultimas", function (req, res) {
    consultaTimesController.exibir(req, res);
});

module.exports = router;