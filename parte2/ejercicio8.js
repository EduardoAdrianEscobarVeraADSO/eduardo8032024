// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.

function invertircadena(cadena) {
    return cadena.split('').reverse().join('');
}

let h = "hola mundo";
let cadenainvertida = invertircadena(h);
alert(cadenainvertida);

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
