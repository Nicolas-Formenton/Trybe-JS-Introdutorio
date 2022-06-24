var primeiroNome = "Nicolas";
var ultimoNome = "Formenton";
var nomeCompleto = primeiroNome + ultimoNome;

console.log(nomeCompleto);
console.log(primeiroNome + " " + ultimoNome);

var mensagem = "Vem pra Trybe!";
console.log(`\n${mensagem.length}`);
console.log(mensagem[0]);
console.log(mensagem[1]);
console.log(mensagem[mensagem.length - 1]);

var mes = "Dezembro";
console.log(`\n${mes.length}`);
console.log(mes[0]);
console.log(mes[1]);
console.log(mes[2]); 

console.log(mes[0] + mes[1] + mes[2]);

var primeiraString = "Abacaxi";
var segundaString = "Uva";

    if(primeiraString.length === segundaString.length){
        console.log(`\n${segundaString}${primeiraString}`)
    } 
    else if(primeiraString.length > segundaString.length){
        console.log(`\n${segundaString}${primeiraString}`)
    }
    else if(primeiraString.length < segundaString.length){
        console.log(`\n${primeiraString}${segundaString}`)
    }

var dia = "Dezessete";
console.log(`${dia[0] + dia[1] + dia[2]}`);