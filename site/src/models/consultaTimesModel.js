var database = require("../database/config");

function publicar(nomeTime, fkUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", nomeTime, fkUsuario);
    var instrucao = `
    insert into consultaTimes(nomeTime, fkUsuario) values ('${nomeTime}', ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibir() {

    instrucaoSql = `select 
        count(c.nomeTime) as Consultas,
        c.nomeTime as Times
        from consultaTimes as c
            group by Times
            order by Consultas desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar,
    exibir,
}
