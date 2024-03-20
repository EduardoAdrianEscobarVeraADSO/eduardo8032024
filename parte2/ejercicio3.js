// Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

function mayor_menor(n1, n2) {
  if (n1>n2) {
    return "el numero 1 es mayor que el numero 2"
  }
  else if(n1===n2){
    return "los dos numeros son iguales"
  }
  else {
    return "el numero 2 es mayor que el numero 1"
  }
}

let n1 = prompt("introduzca el numero 1: ");
let n2 = prompt("introduzca el numero 2: ");

alert(mayor_menor(n1, n2))

