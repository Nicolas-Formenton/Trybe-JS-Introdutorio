var nota = 150;

if (nota >= 100){
    console.log(`Aprovado \nNota: ${nota}`);
} else{
    console.log(`Não Aprovado \nNota: ${nota}`);
}


var entendiTudo = false;

if(entendiTudo){
    console.log("\nSeguimos em frente com a aula");
} else {
    console.log("\nRevemos a aula.");
}


var luzSemaforo = "Amarela";

    if(luzSemaforo === "Verde"){
        console.log("\nSiga em frente");
} else if(luzSemaforo === "Amarela"){
    console.log("\nOu ce vai, ou ce fica!");
} else {
    console.log("\nSinal vermelho! Pare!");
}




var anoDeNascimento = 1980;
  
if(anoDeNascimento <= 1945){
    console.log("Geração silenciosa");
} else if (anoDeNascimento > 1945 && anoDeNascimento <= 1964){
    console.log("Boomers");
} else if (anoDeNascimento > 1964 && anoDeNascimento <= 1980){
    console.log("Geração X");
} else if (anoDeNascimento > 1980 && anoDeNascimento <= 1996){
    console.log("Millennials");
} else {
    console.log("Geração Z");
}