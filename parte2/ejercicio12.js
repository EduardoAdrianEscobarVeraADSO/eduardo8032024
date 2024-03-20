// • Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

function conversion(n1, n2) {
  let suma = n1 + n2;
  let numerob = suma.toString(2)
  return numerob;
}
n1 = parseInt(prompt("introduzca el numero 1: "))
n2 = parseInt(prompt("introduzca el numero 2: "))
let convertir = conversion(n1, n2);
alert("La suma en binario es: " + convertir);
