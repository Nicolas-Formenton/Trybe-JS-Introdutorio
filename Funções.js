var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoDoVolante = 0;

function ligarDesligar(){
    if(statusCarro==="desligado"){
        statusCarro = "ligado";
    } else{
        statusCarro = "desligado";
    }

    return statusCarro;
}

function acelerar(incremento){
    aceleracao = aceleracao + incremento;

    return "Acelerand a " + aceleracao + "m/s²";
}

function frear(decremento){
    aceleracao = aceleracao - decremento;

    return "Desacelerando para " + aceleracao + "m/s²";
}

function girarVolante(anguloRotacao){
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "º";
}

console.log(ligarDesligar());
console.log(acelerar(20));
console.log(girarVolante(-45));
console.log(frear(5));
console.log(girarVolante(0));
console.log(frear(15));
console.log(ligarDesligar());
