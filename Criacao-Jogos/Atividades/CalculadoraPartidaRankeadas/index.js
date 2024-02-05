let vitorias = 80
let derrotas = 3

index()

function index(){
    let saldo = resultado(vitorias, derrotas)
    let nivel = nivelamento(saldo)

    exibir(saldo, nivel)

}


function resultado(vitorias, derrotas){
    return vitorias - derrotas
}

function nivelamento(saldo){
    if( saldo <= 10){
        nivel = "Ferro"
    }else if(saldo <=20){
        nivel = "Bronze"
    }else if(saldo <=50){
        nivel = "Prata"
    }else if(saldo <=80){
        nivel = "Ouro"
    }else if(saldo <=90){
        nivel = "Diamante"
    }else if(saldo <=100){
        nivel = "Lendário"
    }else {
        nivel = "Imortal"
    }

    return nivel
}

function exibir(saldo , nivel){
console.log(`O Herói tem saldo de ${saldo} está no nível de ${nivel}`)
}