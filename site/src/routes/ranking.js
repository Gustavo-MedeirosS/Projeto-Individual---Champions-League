var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/ultimas", function (req, res) {
    rankingController.buscarUltimasMedidas(req, res);
});

// router.get("/tempo-real/:idAquario", function (req, res) {
//     rankingController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;