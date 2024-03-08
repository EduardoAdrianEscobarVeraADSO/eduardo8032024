// Contenido del archivo ejercicio50.js
// 50. Considere dos variables llamadas temperatura y presión. Escriba una sentencia ifelse que muestre en pantalla la palabra Alarma si la variable presión es mayor a
// 200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar
// en pantalla la palabra Normal.


let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
let presion = parseFloat(prompt("Ingrese la presión:"));

if (presion > 200 || temperatura > 100) {
    alert("Alarma");
} else {
    alert("Normal");
}