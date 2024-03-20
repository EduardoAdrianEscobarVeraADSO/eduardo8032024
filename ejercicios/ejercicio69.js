// Contenido del archivo ejercicio69.js
// 69. Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo.
let altura = parseInt(prompt("Ingrese la altura del triángulo:"));
let triangulo = "";


if (altura > 0) {
    
    for (let i = 1; i <= altura; i++) {
        for (let j = 1; j <= i; j++) {
            triangulo += "* ";
        }
        triangulo += "\n";
    }
    alert(triangulo);
} else {
    alert("Por favor, ingrese un número entero positivo válido.");
}