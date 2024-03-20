// Contenido del archivo ejercicio26.js
// 26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

let g_c = prompt("introduzca los grados celsius: ");
g_c = parseFloat(g_c)
let conversion = (g_c*9.0/5) + 32;
alert("la conversion es de : " + conversion);