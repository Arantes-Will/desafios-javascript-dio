const prompt = require("prompt-sync")()
console.clear()

class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

     atacar() {
        if(this.tipo === "mago"){
          console.log(`o ${this.tipo} atacou usando magia`) 
        }
        else if(this.tipo === "guerreiro"){
          console.log(`o ${this.tipo} atacou usando espada`)  
        }
        else if(this.tipo === "monge"){
          console.log(`o ${this.tipo} atacou usando artes marciais`)
        }
        else if(this.tipo === "ninja"){
          console.log(`o ${this.tipo} atacou usando shuriken`)
    }
  }
}

for(i = 1; i <= 4; i++){
    let nome = prompt("Informe o nome: ")
    let idade = prompt("Informe a idade: ")
    let tipo = prompt("Informe o tipo: ")

    let hero = new Heroi(nome,idade,tipo)
    console.log(hero)
    hero.atacar()
}
