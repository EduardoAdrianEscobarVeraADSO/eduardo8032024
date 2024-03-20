// Contenido del archivo ejercicio56.js
// 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo = parseFloat(prompt("Ingrese el saldo en la cuenta:"));

let interes;
if (saldo < 100000) {
    interes = saldo * 0.03;
} else {
    interes = saldo * 0.04;
}

let saldoFinal = saldo + interes;

alert("Saldo final: $" + saldoFinal + " Interés pagado: $ " + interes);
