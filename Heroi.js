let heroi = {
    nome: "Guerreiro",
    xp: 3000
}

if (heroi.xp < 1000) {
    heroi.ranking = "Ferro";
} else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    heroi.ranking = "Bronze";
} else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    heroi.ranking = "Prata";
} else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
    heroi.ranking = "Ouro";
} else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    heroi.ranking = "Platina";
} else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    heroi.ranking = "Ascendente";
} else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    heroi.ranking = "Imortal";
} else if (heroi.xp >= 10001) {
    heroi.ranking = "Radiante";
}
console.log(heroi.nome + " tem " + heroi.xp + " de XP e está no ranking " + heroi.ranking + ".");
