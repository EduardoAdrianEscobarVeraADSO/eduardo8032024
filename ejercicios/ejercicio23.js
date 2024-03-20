// Contenido del archivo ejercicio23.js
// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por
// segundo.

let kmh = prompt("introduzca la velocidad en kilometros por hora: ")
kmh = parseFloat(kmh);
let conversion = kmh/3.6;
alert("serian en metros por segundo " + conversion)
