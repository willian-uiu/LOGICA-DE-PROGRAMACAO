class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    }

    atacar() {

        if (this.tipo == "mago"){
            return `O ${this.tipo} ${this.nome} atacou usando artes magia`;
        } 
        else if (this.tipo == "guerreiro") {
           return `O ${this.tipo} ${this.nome} atacou usando espada`;
        }
        else if (this.tipo == "monge") {
           return `O ${this.tipo} ${this.nome} atacou usando artes marciais`;
        }
        else if (this.tipo == "ninja") {
           return `O ${this.tipo} ${this.nome} atacou usando shuriken`;
        }

    }
}

let willian = new Heroi("Willian", 21, "ninja")
console.log(willian.atacar());