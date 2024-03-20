//Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

function serie(cantidad) {
  let serie = [];
  let suma = 0;
  let todosnegativos = true;
  
  for (let i = 1; i <= cantidad; i++){
    let numero = parseInt(prompt(`Introduzca el ${i}º número de la serie: `));
    
    
    if (numero >= 0) {
      suma += numero;
      todosnegativos = false;
    }
  }
  
  if (todosnegativos) {
    suma = 0;
  }
  
  serie.push(suma);
  return serie;
}

let cantidad = parseInt(prompt("Introduzca la cantidad de números de la serie: "));
let serienumeros = serie(cantidad);
alert("La suma de los números positivos es: " + serienumeros[0]);