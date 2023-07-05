var database = require("../database/config");

function consultar(fkUsuario) {

    instrucaoSql = `
        select * from pontuacaoQuiz where fkUsuario = ${fkUsuario};`
    ;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(acertos, pontuacao, fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", acertos, pontuacao, fkUsuario);
    var instrucao = `
        insert into pontuacaoQuiz(acertos, pontuacao, fkUsuario) values (${acertos}, ${pontuacao}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaPontuacao, novaQtdAcertos, fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaPontuacao, novaQtdAcertos, fkUsuario);
    var instrucao = `
        update pontuacaoQuiz set acertos = ${novaQtdAcertos}, pontuacao = ${novaPontuacao} where fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar,
    editar,
    consultar
}
