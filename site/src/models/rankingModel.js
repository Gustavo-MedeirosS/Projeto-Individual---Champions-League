var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
        u.nome as 'Usuário',
        p.acertos 'Acertos',
        p.pontuacao as 'Pontuação',
        t.nome as 'Time'
        from pontuacaoQuiz as p join usuario as u
            on fkUsuario = idUsuario
            join timeFavorito as t on idTime = fkTimeFavorito
            order by Pontuação desc;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        u.nome as 'Usuário',
        p.acertos 'Acertos',
        p.pontuacao as 'Pontuação',
        t.nome as 'Time'
        from pontuacaoQuiz as p join usuario as u
            on fkUsuario = idUsuario
            join timeFavorito as t on idTime = fkTimeFavorito
            order by Pontuação desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}
