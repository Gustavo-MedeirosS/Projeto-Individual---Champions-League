var dados_times = [
    {
        nome: "AJAX",
        partidas: 6,
        vitorias: 2,
        empates: 0,
        derrotas: 4,
        gols_marcados: 11,
        gols_sofridos: 16,
        cartoes_amarelos: 15,
        cartoes_vermelhos: 1
    },
    {
        nome: "ATLÉTICO DE MADRID",
        partidas: 6,
        vitorias: 1,
        empates: 2,
        derrotas: 3,
        gols_marcados: 5,
        gols_sofridos: 9,
        cartoes_amarelos: 13,
        cartoes_vermelhos: 0
    },
    {
        nome: "BARCELONA",
        partidas: 6,
        vitorias: 2,
        empates: 1,
        derrotas: 3,
        gols_marcados: 12,
        gols_sofridos: 12,
        cartoes_amarelos: 10,
        cartoes_vermelhos: 0
    },
    {
        nome: "BAYER LEVERKUSEN",
        partidas: 6,
        vitorias: 1,
        empates: 2,
        derrotas: 3,
        gols_marcados: 4,
        gols_sofridos: 8,
        cartoes_amarelos: 19,
        cartoes_vermelhos: 1
    },
    {
        nome: "BAYERN DE MUNIQUE",
        partidas: 10,
        vitorias: 8,
        empates: 1,
        derrotas: 1,
        gols_marcados: 22,
        gols_sofridos: 6,
        cartoes_amarelos: 23,
        cartoes_vermelhos: 2
    },
    {
        nome: "BENFICA",
        partidas: 10,
        vitorias: 6,
        empates: 3,
        derrotas: 1,
        gols_marcados: 26,
        gols_sofridos: 13,
        cartoes_amarelos: 19,
        cartoes_vermelhos: 0
    },
    {
        nome: "BORUSSIA DORTMUND",
        partidas: 8,
        vitorias: 3,
        empates: 3,
        derrotas: 2,
        gols_marcados: 11,
        gols_sofridos: 7,
        cartoes_amarelos: 17,
        cartoes_vermelhos: 0
    },
    {
        nome: "BRUGGE",
        partidas: 8,
        vitorias: 3,
        empates: 2,
        derrotas: 3,
        gols_marcados: 8,
        gols_sofridos: 11,
        cartoes_amarelos: 27,
        cartoes_vermelhos: 1
    },
    {
        nome: "CELTIC",
        partidas: 6,
        vitorias: 0,
        empates: 2,
        derrotas: 4,
        gols_marcados: 4,
        gols_sofridos: 15,
        cartoes_amarelos: 7,
        cartoes_vermelhos: 0
    },
    {
        nome: "CHELSEA",
        partidas: 10,
        vitorias: 5,
        empates: 1,
        derrotas: 4,
        gols_marcados: 12,
        gols_sofridos: 9,
        cartoes_amarelos: 25,
        cartoes_vermelhos: 1
    },
    {
        nome: "COPENHAGEN",
        partidas: 6,
        vitorias: 0,
        empates: 3,
        derrotas: 3,
        gols_marcados: 1,
        gols_sofridos: 12,
        cartoes_amarelos: 12,
        cartoes_vermelhos: 1
    },
    {
        nome: "DINAMO ZAGREB",
        partidas: 6,
        vitorias: 1,
        empates: 1,
        derrotas: 4,
        gols_marcados: 4,
        gols_sofridos: 11,
        cartoes_amarelos: 13,
        cartoes_vermelhos: 0
    },
    {
        nome: "FRANKFURT",
        partidas: 8,
        vitorias: 3,
        empates: 1,
        derrotas: 4,
        gols_marcados: 7,
        gols_sofridos: 13,
        cartoes_amarelos: 18,
        cartoes_vermelhos: 2
    },
    {
        nome: "INTER DE MILÃO",
        partidas: 12,
        vitorias: 7,
        empates: 3,
        derrotas: 2,
        gols_marcados: 19,
        gols_sofridos: 10,
        cartoes_amarelos: 24,
        cartoes_vermelhos: 1
    },
    {
        nome: "JUVENTUS",
        partidas: 6,
        vitorias: 1,
        empates: 0,
        derrotas: 5,
        gols_marcados: 9,
        gols_sofridos: 13,
        cartoes_amarelos: 14,
        cartoes_vermelhos: 0
    },
    {
        nome: "LIVERPOOL",
        partidas: 8,
        vitorias: 5,
        empates: 0,
        derrotas: 3,
        gols_marcados: 19,
        gols_sofridos: 12,
        cartoes_amarelos: 11,
        cartoes_vermelhos: 0
    },
    {
        nome: "MACCABI HAIFA",
        partidas: 6,
        vitorias: 1,
        empates: 0,
        derrotas: 5,
        gols_marcados: 7,
        gols_sofridos: 21,
        cartoes_amarelos: 14,
        cartoes_vermelhos: 0
    },
    {
        nome: "MANCHESTER CITY",
        partidas: 12,
        vitorias: 7,
        empates: 5,
        derrotas: 0,
        gols_marcados: 31,
        gols_sofridos: 5,
        cartoes_amarelos: 20,
        cartoes_vermelhos: 1
    },
    {
        nome: "MILAN",
        partidas: 12,
        vitorias: 5,
        empates: 3,
        derrotas: 4,
        gols_marcados: 15,
        gols_sofridos: 11,
        cartoes_amarelos: 30,
        cartoes_vermelhos: 1
    },
    {
        nome: "NAPOLI",
        partidas: 10,
        vitorias: 7,
        empates: 1,
        derrotas: 2,
        gols_marcados: 26,
        gols_sofridos: 8,
        cartoes_amarelos: 20,
        cartoes_vermelhos: 1
    },
    {
        nome: "OLYMPIQUE DE MARSEILLE",
        partidas: 6,
        vitorias: 2,
        empates: 0,
        derrotas: 4,
        gols_marcados: 8,
        gols_sofridos: 8,
        cartoes_amarelos: 11,
        cartoes_vermelhos: 1
    },
    {
        nome: "PSG",
        partidas: 8,
        vitorias: 4,
        empates: 2,
        derrotas: 2,
        gols_marcados: 16,
        gols_sofridos: 10,
        cartoes_amarelos: 14,
        cartoes_vermelhos: 0
    },
    {
        nome: "PORTO",
        partidas: 8,
        vitorias: 4,
        empates: 1,
        derrotas: 3,
        gols_marcados: 12,
        gols_sofridos: 8,
        cartoes_amarelos: 25,
        cartoes_vermelhos: 3
    },
    {
        nome: "RANGERS",
        partidas: 6,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_marcados: 2,
        gols_sofridos: 22,
        cartoes_amarelos: 10,
        cartoes_vermelhos: 1
    },
    {
        nome: "LEIPZIG",
        partidas: 8,
        vitorias: 4,
        empates: 1,
        derrotas: 3,
        gols_marcados: 14,
        gols_sofridos: 17,
        cartoes_amarelos: 8,
        cartoes_vermelhos: 0
    },
    {
        nome: "RB SALZBURG",
        partidas: 6,
        vitorias: 1,
        empates: 3,
        derrotas: 2,
        gols_marcados: 5,
        gols_sofridos: 9,
        cartoes_amarelos: 11,
        cartoes_vermelhos: 0
    },
    {
        nome: "REAL MADRID",
        partidas: 12,
        vitorias: 8,
        empates: 2,
        derrotas: 2,
        gols_marcados: 26,
        gols_sofridos: 13,
        cartoes_amarelos: 15,
        cartoes_vermelhos: 0
    },
    {
        nome: "SEVILLA",
        partidas: 6,
        vitorias: 1,
        empates: 2,
        derrotas: 3,
        gols_marcados: 6,
        gols_sofridos: 12,
        cartoes_amarelos: 13,
        cartoes_vermelhos: 0
    },
    {
        nome: "SHAKHTAR DONETSK",
        partidas: 6,
        vitorias: 1,
        empates: 3,
        derrotas: 2,
        gols_marcados: 8,
        gols_sofridos: 10,
        cartoes_amarelos: 16,
        cartoes_vermelhos: 0
    },
    {
        nome: "SPORTING",
        partidas: 6,
        vitorias: 2,
        empates: 1,
        derrotas: 3,
        gols_marcados: 8,
        gols_sofridos: 9,
        cartoes_amarelos: 17,
        cartoes_vermelhos: 3
    },
    {
        nome: "TOTTENHAM",
        partidas: 8,
        vitorias: 3,
        empates: 3,
        derrotas: 2,
        gols_marcados: 8,
        gols_sofridos: 7,
        cartoes_amarelos: 22,
        cartoes_vermelhos: 2
    },
    {
        nome: "VIKTORIA PLZEN",
        partidas: 6,
        vitorias: 0,
        empates: 0,
        derrotas: 6,
        gols_marcados: 5,
        gols_sofridos: 24,
        cartoes_amarelos: 12,
        cartoes_vermelhos: 1
    },
];

