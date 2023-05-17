var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    // res.render("index", { title: "Express" });
    res.sendFile('index.html', {
        root: './public/html'
      });
});

router.get("/login", function (req, res) {
    // res.render("index", { title: "Express" });
    res.sendFile('login.html', {
        root: './public/html'
      });
});

router.get("/cadastro", function (req, res) {
    // res.render("index", { title: "Express" });
    res.sendFile('cadastro.html', {
        root: './public/html'
      });
});

router.get("/noticias", function (req, res) {
    // res.render("index", { title: "Express" });
    res.sendFile('noticias.html', {
        root: './public/html'
      });
});

module.exports = router;