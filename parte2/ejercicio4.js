// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
// cortas menores de 5 caracteres).

function longitudpalabras(palabra) {
  if (palabra.length >= 5) {
    return "la palabra es larga"
  }
  else {
    return "la palabra es corta"
  }
}
let palabra = prompt("introduzca la palabra: ")
alert(longitudpalabras(palabra))