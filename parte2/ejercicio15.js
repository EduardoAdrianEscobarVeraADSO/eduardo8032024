// • Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este numero es par o impar.

function aleatoria() {
  numero1 = Math.floor(Math.random() * 100);
  if (numero1 % 2 === 0) {
    console.log(numero1)
    return "el numero es par";
  }
  else {
    console.log(numero1)
    return "el numero es inpar";
  }
}

alert(aleatoria());