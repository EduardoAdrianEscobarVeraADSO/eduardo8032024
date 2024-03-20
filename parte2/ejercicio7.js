// Crea una función de nos devuelva el elemento mayor de un arreglo de números.

function obtenerArreglo() {
  let cantidad = parseInt(prompt("Introduzca la cantidad de elementos del arreglo: "));
  let numeros = [];
  for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(numero);
  }
  return numeros;
}

function obtenerMayor(arreglo) {
  return Math.max(...arreglo);
}

let arreglo = obtenerArreglo();
alert("Arreglo ingresado: " + arreglo);
let mayor = obtenerMayor(arreglo);
alert("El número mayor es: " + mayor);
