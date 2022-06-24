// E - &&
var diaEstaEnsolarado = true; //false
var ehFinalDeSemana = true; //false
var vouPraPraia = diaEstaEnsolarado && ehFinalDeSemana;

console.log(vouPraPraia)

// OU - ||

var carroTemGasolina = false;
var tenhoDinheiroParaAbastecer = true;
var vouParaPraia = carroTemGasolina || tenhoDinheiroParaAbastecer;

console.log(vouParaPraia);
