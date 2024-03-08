// Contenido del archivo ejercicio66.js
// 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.
let cantidad = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interes = parseFloat(prompt("Ingrese el interés anual (%):"));
let años = parseInt(prompt("Ingrese el número de años:"));


if (cantidad > 0 && interes > 0 && años > 0) {
    let capital = cantidad;
    for (let i = 1; i <= años; i++) {
        
        let intAcum = capital * (interes / 100);
        
        
        let nuevoCapital = capital + intAcum;

        
        alert("Año " + i + ": Capital obtenido = " + nuevoCapital.toFixed(2));

        
        capital = nuevoCapital;
    }

    
    alert("Capital final después de " + años + " años: " + nuevoCapital.toFixed(2));
} else {
    alert("Por favor, ingrese valores válidos (números positivos).");
}