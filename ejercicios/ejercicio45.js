// Contenido del archivo ejercicio45.js
// 45. Determinar si un número es positivo y menor que 100.

let numero = prompt("introduzca un numero:");

if (numero > 0 && numero < 100){
    alert("el numero es positivo y es menor que 100")
}
else if(numero < 0 ){
    alert("el numero es negativo")
}
else if (numero > 0 && numero > 100) {
    alert("el numero es positivo y mayor que 100")
}
