// 1) Criação de variável de texto e numérica

const nome = "Hayssa"
let numero_chamada = 12

// 2) Criação de uma lista
console.log("#### EXERCICIO 2 ####")
let jogos = ["clash of clash", "free fire", "roblox"];


// 3) Utilização de um laço while
console.log("#### EXERCICIO 3 ####")
contador = 0;

console.log("jogos favoritos da "+nome+":")
while (contador < jogos.length) {
    let c2=contador + 1;
    console.log(c2 + "-" + jogos[contador]);
    contador = contador + 1;
}
// 4) Criação de um objeto
const filme = {
    nome: "hayssa",
    serie_fav: "game of thrones",
    ano_lancamento: "2011",
    nota_IMDb: 9.2,
  
};

// 5) Utilização de if-else

console.log("#### EXERCICIO 5 ####")

if (filme.nota_IMDb <= 4.0) {
    console.log("O filme possui uma nota considerada baixa.");
} else if (filme.nota_IMDb <= 7.0) {
    console.log("O filme é considerado razoável.");
} else {
    console.log("O filme é muito bom!");
}





// 6) Criação de uma função que analisa os dados da previsão do tempo
console.log("#### EXERCICIO 6 ####")
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]




function verificaChuva(previsoes) {
    previsoes.forEach(previsao => {
        if (previsao.chanceDeChuva > 50) {
            console.log(`${previsao.dia}: levar guarda-chuva`);
        } else {
            console.log(`${previsao.dia}: tempo agradável`);
        }
    });
}
verificaChuva(previsaoTempo);