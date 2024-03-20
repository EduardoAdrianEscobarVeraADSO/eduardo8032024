// Contenido del archivo ejercicio67.js
// 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido.
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