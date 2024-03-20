// • Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function numeros(n) {
  if (n == 0) {
    return "cero"
  }
  else if (n == 1) {
    return "uno"
  }
  else if (n == 2) {
    return "dos"
  }
  else if (n == 3) {
    return "tres"
  }
  else if (n == 4) {
    return "cuatro"
  }
  else if (n == 5) {
    return "cinco"
  }
  else {
    return "numero no valido"
  }
}
let n = parseInt(prompt("introduzca un numero del 0 al 5"));
alert(numeros(n))
