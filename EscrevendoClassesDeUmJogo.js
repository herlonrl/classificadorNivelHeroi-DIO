class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}
// Exemplo de uso
let heroi1 = new Heroi('Arthas', 30, 'Guerreiro');
heroi1.atacar(); // O Guerreiro atacou usando espada. 
let heroi2 = new Heroi('Gandalf', 200, 'Mago');
heroi2.atacar(); // O Mago atacou usando magia.
let heroi3 = new Heroi('Li Mu Bai', 25, 'Monge');
heroi3.atacar(); // O Monge atacou usando artes marciais.
let heroi4 = new Heroi('Naruto', 16, 'Ninja');
heroi4.atacar(); // O Ninja atacou usando shuriken.
let heroi5 = new Heroi('Desconhecido', 40, 'Desconhecido');
heroi5.atacar(); // O Desconhecido atacou usando um ataque desconhecido.

