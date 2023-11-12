
const prompt = require("prompt-sync")()
console.clear()

//Variáveis
let nivel
let nome = prompt("Informe o nome: ")
let qtd_exp = parseInt(prompt("Informe a quantidade de experiência (XP): "))

//Estrutura de dedições e Operadores
if(qtd_exp <= 1000){
    nivel =  "Ferro"
}
else if(qtd_exp > 1000 & qtd_exp <= 2000){
    nivel = "Bronze"
}
else if(qtd_exp >= 2001 & qtd_exp <= 5000){
    nivel = "Prata"
}
else if(qtd_exp >= 6001 & qtd_exp <= 7000){
    nivel = "Ouro"
}
else if(qtd_exp >= 7001 & qtd_exp <= 8000){
    nivel = "Platina"
}
else if(qtd_exp >= 8001 & qtd_exp <= 9000){
    nivel = "Ascendente"
}
else if(qtd_exp >= 9001 & qtd_exp <= 10000){
    nivel = "Immortal"
}
else if(qtd_exp >= 10001){
    nivel = "Radiante"
}

if(qtd_exp >= 10001){
    console.log("****CONTAGEM REGRESSIVA*****")
    //Laços de Repetição
    for(let i = 3; i > 0; i--){
        console.log(i)
    }
    console.log(`"O Herói de nome **${nome}** está no nível de **${nivel}**"`)
    console.log("   O /  ");
    console.log("  /|  ");
    console.log("  / \\  ");
}
else{
    console.log(`"O Herói de nome **${nome}** está no nível de **${nivel}**"`)
}
