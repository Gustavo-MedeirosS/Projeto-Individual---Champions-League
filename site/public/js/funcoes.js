// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        window.location = "../dashboard/analytics.html";
    } else {
        window.location = "../login.html";
    }
}

function validarCadastrar() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        window.location = "../dashboard/analytics.html";
    } 
}

function limparSessao() {
    sessionStorage.clear();
    swal("Saindo...", "Desconectando do site e redirecionando para a home...", "success");
    setTimeout(() => {
        window.location = "../index.html";
    }, 2000)
}

function exibirUsuario() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var timeFavorito = Number(sessionStorage.TIME_FAVORITO);

    var times = [
        "./images/times/real-madrid.png",
        "./images/times/manchester-city.png",
        "./images/times/borussia-dortmund.png",
        "./images/times/milan.png",
        "./images/times/barcelona.png",
        "./images/times/bayern-munique.png",
        "./images/times/paris-saint-germain.png",
        "./images/times/liverpool.png",
        "./images/times/ajax.png",
        "./images/times/internazionale.png",
        "./images/times/benfica.png",
    ];

    var nome_usuario = document.getElementById("nome_usuario");
    var iconeUsuario = document.getElementById("iconeUsuario");
    var iconeUsuario2 = document.getElementById("iconeUsuario2");

    if (email != null && nome != null && timeFavorito != null) {
        nome_usuario.innerHTML = nome;
        iconeUsuario.innerHTML = `<img style="height: 20px" src="${times[timeFavorito - 1]}" alt="">`;
        iconeUsuario2.innerHTML = `<img style="height: 27px" src="${times[timeFavorito - 1]}" alt="">`;
    } else {
        iconeUsuario.innerHTML = `<i class="fa-solid fa-user fa-xs" style="color: #110391;"></i>`;
        iconeUsuario2.innerHTML = `<i class="fa-solid fa-user fa-xs" style="color: #110391;"></i>`;
    }

}

// MESMA FUNÇÃO DE exibirUsuario SÓ QUE COM ROTA DAS IMAGENS DIFERENTES
function exibirUsuario2() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var timeFavorito = Number(sessionStorage.TIME_FAVORITO);

    var times = [
        "../images/times/real-madrid.png",
        "../images/times/manchester-city.png",
        "../images/times/borussia-dortmund.png",
        "../images/times/milan.png",
        "../images/times/barcelona.png",
        "../images/times/bayern-munique.png",
        "../images/times/paris-saint-germain.png",
        "../images/times/liverpool.png",
        "../images/times/ajax.png",
        "../images/times/internazionale.png",
        "../images/times/benfica.png",
    ];

    var nome_usuario = document.getElementById("nome_usuario");
    var iconeUsuario = document.getElementById("iconeUsuario");
    var iconeUsuario2 = document.getElementById("iconeUsuario2");

    if (email != null && nome != null && timeFavorito != null) {
        nome_usuario.innerHTML = nome;
        iconeUsuario.innerHTML = `<img style="height: 20px" src="${times[timeFavorito - 1]}" alt="">`;
        iconeUsuario2.innerHTML = `<img style="height: 27px" src="${times[timeFavorito - 1]}" alt="">`;
    } else {
        iconeUsuario.innerHTML = `<i class="fa-solid fa-user fa-xs" style="color: #110391;"></i>`;
        iconeUsuario2.innerHTML = `<i class="fa-solid fa-user fa-xs" style="color: #110391;"></i>`;
    }

}
