if (sessionStorage.length != 0) {
    nome_usuario.innerHTML = "Entrar";
  } else {
    nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
  }