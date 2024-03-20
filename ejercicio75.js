// Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.
// function mayor_menor(n1, n2) {
//   if (n1>n2) {
//     return "el numero 1 es mayor que el numero 2"
//   }
//   else if(n1===n2){
//     return "los dos numeros son iguales"
//   }
//   else {
//     return "el numero 2 es mayor que el numero 1"
//   }
// }

// let n1 = prompt("introduzca el numero 1: ");
// let n2 = prompt("introduzca el numero 2: ");

// alert(mayor_menor(n1, n2))

// Crea una función que tome un número como argumento y devuelva la cadena si el
// numero es par o impar

// function par_impar(n1) {
//   if (n1 % 2 === 0) {
//     return "el numero es par"
//   }
//   else {
//     return "el numero es impar"
//   }
// }

// let n1 = prompt("introduzca un numero: ");
// alert(par_impar(n1))

// Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

// function mayor_menor(n1, n2) {
//   if (n1>n2) {
//     return "el numero 1 es mayor que el numero 2"
//   }
//   else if(n1===n2){
//     return "los dos numeros son iguales"
//   }
//   else {
//     return "el numero 2 es mayor que el numero 1"
//   }
// }

// let n1 = prompt("introduzca el numero 1: ");
// let n2 = prompt("introduzca el numero 2: ");

// alert(mayor_menor(n1, n2))

// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
// cortas menores de 5 caracteres).

// function longitudpalabras(palabra) {
//   if (palabra.length >= 5) {
//     return "la palabra es larga"
//   }
//   else {
//     return "la palabra es corta"
//   }
// }
// let palabra = prompt("introduzca la palabra: ")
// alert(longitudpalabras(palabra))

// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.

// function contarSilabas(palabra) {
//     let patronS = /[aeiouáéíóú]+/gi;
//     let matches = palabra.match(patronS);
    
//     console.log("Palabra:", palabra);
//     console.log("Coincidencias:", matches);
    
//     if (matches !== null) {
//         return matches.length;
//     } else {
//         return 0;
//     }
// }

// let palabra = prompt("Introduce una palabra:");
// let numSilabas = contarSilabas(palabra);

// alert("La palabra '" + palabra + "' tiene " + numSilabas + " sílaba(s).");

// Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
// * 5, nos debe mostrar el resultado para las demás multiplicaciones.

// function tablaMultiplicar5() {
//     console.log("Tabla de multiplicar del 5:");
//     for (let i = 1; i <= 10; i++) {
//         if (i !== 5) {
//             let resultado = 5 * i;
//             console.log(`5 x ${i} = ${resultado}`);
//         }
//     }
// }

// tablaMultiplicar5();

// Crea una función de nos devuelva el elemento mayor de un arreglo de números.
// function obtenerArreglo() {
//   let cantidad = parseInt(prompt("Introduzca la cantidad de elementos del arreglo: "));
//   let numeros = [];
//   for (let i = 0; i < cantidad; i++) {
//     let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
//     numeros.push(numero);
//   }
//   return numeros;
// }

// function obtenerMayor(arreglo) {
//   return Math.max(...arreglo);
// }

// let arreglo = obtenerArreglo();
// alert("Arreglo ingresado: " + arreglo);
// let mayor = obtenerMayor(arreglo);
// alert("El número mayor es: " + mayor);

// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.

// function invertircadena(cadena) {
//     return cadena.split('').reverse().join('');
// }

// let h = "hola mundo";
// let cadenainvertida = invertircadena(h);
// alert(cadenainvertida);

// function invertirCadena(cadena) {
//     let resultado = "";
//     for (let i = cadena.length - 1; i >= 0; i--) {
//         resultado += cadena.charAt(i);
//     }
//     return resultado;
// }

// let h = "hola mundo";
// let cadenaInvertida = invertirCadena(h);
// alert(cadenaInvertida);

// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es valido y false si no es válido.

// function pin(pin) {
//   let regex = /^[0-9]{4,6}$/;
//   return regex.test(pin);
// }

// let pina = prompt("Introduzca su PIN, solo deben ser números y tener entre 4 a 6 dígitos:");
// alert(pin(pina));

// • Genera un patrón de asteriscos en forma de pirámide

// function imprimirPiramide(filas) {
//     for (let i = 1; i <= filas; i++) {
//         let fila = '';
        
//         for (let j = 1; j <= filas - i; j++) {
//             fila += ' ';
//         }
        
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             fila += '*';
//         }
//         console.log(fila);
//     }
// }
// imprimirPiramide(5);

//Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

// function serie(cantidad) {
//   let serie = [];
//   let suma = 0;
//   let todosnegativos = true;
  
//   for (let i = 1; i <= cantidad; i++){
//     let numero = parseInt(prompt(`Introduzca el ${i}º número de la serie: `));
    
    
//     if (numero >= 0) {
//       suma += numero;
//       todosnegativos = false;
//     }
//   }
  
//   if (todosnegativos) {
//     suma = 0;
//   }
  
//   serie.push(suma);
//   return serie;
// }

// let cantidad = parseInt(prompt("Introduzca la cantidad de números de la serie: "));
// let serienumeros = serie(cantidad);
// alert("La suma de los números positivos es: " + serienumeros[0]);

// • Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

// function conversion(n1, n2) {
//   let suma = n1 + n2;
//   let numerob = suma.toString(2)
//   return numerob;
// }
// n1 = parseInt(prompt("introduzca el numero 1: "))
// n2 = parseInt(prompt("introduzca el numero 2: "))
// let convertir = conversion(n1, n2);
// alert("La suma en binario es: " + convertir);


// • Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

// function sinvocales(palabra) {
//   // Usa una expresión regular para encontrar todas las vocales y reemplazarlas con una cadena vacía
//   return palabra.replace(/[aeiouáéíóú]/gi, "");
// }

// let palabra = prompt("Introduzca una palabra: ");
// let resultado = sinvocales(palabra);
// alert("La palabra sin vocales es: " + resultado);

// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

// function inversoAditivo() {
//   let numeros = [];
//   let cantidad = parseInt(prompt("Ingrese la cantidad de números: "));
  
  
//   for (let i = 1; i <= cantidad; i++) {
//     let numero = parseInt(prompt(`Ingrese el número ${i}: `));
//     numeros.push(numero);
//   }

 
//   let inversos = [];
//   for (let i = 0; i < numeros.length; i++) {
//     inversos.push(numeros[i] * -1);
//   }
  
//   return inversos;
// }


// let inversos = inversoAditivo();
// console.log(inversos);

// • Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este numero es par o impar.

// function aleatoria() {
//   numero1 = Math.floor(Math.random() * 100);
//   if (numero1 % 2 === 0) {
//     console.log(numero1)
//     return "el numero es par";
//   }
//   else {
//     console.log(numero1)
//     return "el numero es inpar";
//   }
  
// }

// alert(aleatoria());

// • Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

// function numeros(n) {
//   if (n == 0) {
//     return "cero"
//   }
//   else if (n == 1) {
//     return "uno"
//   }
//   else if (n == 2) {
//     return "dos"
//   }
//   else if (n == 3) {
//     return "tres"
//   }
//   else if (n == 4) {
//     return "cuatro"
//   }
//   else if (n == 5) {
//     return "cinco"
//   }
//   else {
//     return "numero no valido"
//   }
// }
// let n = parseInt(prompt("introduzca un numero del 0 al 5"));
// alert(numeros(n))

