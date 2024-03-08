// Contenido del archivo ejercicio49.js
// 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los
// lados sean positivos: área triangulo= lado * lado

let longitud = parseFloat(prompt("Ingrese la longitud del rectángulo:"));
let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));

if (longitud > 0 && ancho > 0) {
    let area = longitud * ancho;
    alert("El área del rectángulo es: " + area);
} else {
    alert("Los lados del rectángulo deben ser positivos.");
}
