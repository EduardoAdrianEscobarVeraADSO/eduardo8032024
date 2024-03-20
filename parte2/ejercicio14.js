// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

function inversoAditivo() {
  let numeros = [];
  let cantidad = parseInt(prompt("Ingrese la cantidad de números: "));
  
  
  for (let i = 1; i <= cantidad; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i}: `));
    numeros.push(numero);
  }

 
  let inversos = [];
  for (let i = 0; i < numeros.length; i++) {
    inversos.push(numeros[i] * -1);
  }
  
  return inversos;
}


let inversos = inversoAditivo();
console.log(inversos);
