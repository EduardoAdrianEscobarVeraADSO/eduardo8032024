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

function contarSilabas(palabra) {
    let patronS = /[aeiouáéíóú]+/gi;
    let matches = palabra.match(patronS);
    
    console.log("Palabra:", palabra);
    console.log("Coincidencias:", matches);
    
    if (matches !== null) {
        return matches.length;
    } else {
        return 0;
    }
}

let palabra = prompt("Introduce una palabra:");
let numSilabas = contarSilabas(palabra);

alert("La palabra '" + palabra + "' tiene " + numSilabas + " sílaba(s).");

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
