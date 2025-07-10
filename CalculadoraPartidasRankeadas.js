//-- Desafio 2 - Calculadora de Partidas Rankeadas --


function classificarRanked(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let classificacao;

    if (vitorias < 10) {
        classificacao = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        classificacao = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        classificacao = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        classificacao = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        classificacao = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        classificacao = "Lendário";
    } else if (vitorias >= 101) {
        classificacao = "Imortal";
    }

    return {
        saldo: saldo,
        classificacao: classificacao
    };
}

// Exemplo de uso
let partidas = {
    vitorias: 55,
    derrotas: 30
};
let resultado = classificarRanked(partidas.vitorias, partidas.derrotas);

console.log(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.classificacao}.`);
