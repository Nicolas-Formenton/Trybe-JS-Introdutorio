//Ex
var numero = 9;
for(var contador = 1; contador <= 9; contador = contador + 1) {
    console.log(`${numero}`,"*",`${contador}`)
    console.log(numero * contador);
}

//Ex
var listaDeNomes = ["Nicolas", "Gandra", "Tick", "Biel", "Lipe"];
for(var indice = 0; indice < listaDeNomes.length; indice++){
    var mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
    console.log(`\n${mensagem}`)
}


//Ex HackerRank (Missing Functions)
var frase = "Xau Brigado!"
var resultado = []
for(var indice = 0; indice < frase.length; indice = indice + 1){
    resultado.push(frase[indice]); //Retorna o Array p resultado como indice.
}
