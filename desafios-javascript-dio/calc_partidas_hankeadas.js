const prompt = require("prompt-sync")()
console.clear()

let qtd_vitorias
let qtd_derrotas
let vitorias

do{
    qtd_vitorias = parseInt(prompt("Informe a quantidade de vitorias: "))
    qtd_derrotas = parseInt(prompt("Informe a quantidade de derrotas: "))

}while(qtd_derrotas > qtd_vitorias)


function saldo_rankeadas(qtd_vitorias, qtd_derrotas){
    return qtd_vitorias - qtd_derrotas
}

vitorias = saldo_rankeadas(qtd_vitorias,qtd_derrotas)

function classificacao(vitorias){
    if(vitorias < 10){
        return "Ferro"
    }
    else if(vitorias >= 11 & vitorias <=20){
        return "Bronze"
    }
    else if(vitorias >= 21 & vitorias <=50){
        return "Prata"
    }
    else if(vitorias >= 51 & vitorias <=80){
        return "Ouro"
    }
    else if(vitorias >= 81 & vitorias <=90){
        return "Diamante"
    }
    else if(vitorias >= 91 & vitorias <=100){
        return "Lendario"
    }
    else if(vitorias >= 101){
        return "Imortal"
    }    
}

console.log(`"O Herói tem de saldo **${vitorias}** está no nível de **${classificacao(vitorias)}**"`)