// Contenido del archivo ejercicio58.js
// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

let mes = prompt("Ingrese el nombre del mes:").toLowerCase();
let signozodiacal;

if (mes === "enero") {
    signozodiacal = "Capricornio";
} else if (mes === "febrero") {
    signozodiacal = "Acuario";
} else if (mes === "marzo") {
    signozodiacal = "Piscis";
} else if (mes === "abril") {
    signozodiacal = "Aries";
} else if (mes === "mayo") {
    signozodiacal = "Tauro";
} else if (mes === "junio") {
    signozodiacal = "Géminis";
} else if (mes === "julio") {
    signozodiacal = "Cáncer";
} else if (mes === "agosto") {
    signozodiacal = "Leo";
} else if (mes === "septiembre") {
    signozodiacal = "Virgo";
} else if (mes === "octubre") {
    signozodiacal = "Libra";
} else if (mes === "noviembre") {
    signozodiacal = "Escorpio";
} else if (mes === "diciembre") {
    signozodiacal = "Sagitario";
} else {
    signozodiacal = "No es un mes válido";
}

alert("El signo zodiacal correspondiente es: " + signozodiacal);