// Crea una función que tome un número como argumento y devuelva la cadena si el
// numero es par o impar

function par_impar(n1) {
  if (n1 % 2 === 0) {
    return "el numero es par"
  }
  else {
    return "el numero es impar"
  }
}

let n1 = prompt("introduzca un numero: ");
alert(par_impar(n1))