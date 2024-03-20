// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es valido y false si no es válido.

function pin(pin) {
  let regex = /^[0-9]{4,6}$/;
  return regex.test(pin);
}

let pina = prompt("Introduzca su PIN, solo deben ser números y tener entre 4 a 6 dígitos:");
alert(pin(pina));


