// let numeroDia = prompt("Ingresa el día de la semana:");

// switch (numeroDia) {
//   case "1":
//     document.write("<h1>El día de hoy es<br>LUNES</h1>");
//     break;
//   case "2":
//     document.write("<h1>El día de hoy es<br>MARTES</h1>");
//     break;
//   case "3":
//     document.write("<h1>El día de hoy es<br>MIÉRCOLES</h1>");
//     break;
//   case "4":
//     document.write("<h1>El día de hoy es<br>JUEVES</h1>");
//     break;
//   case "5":
//     document.write("<h1>El día de hoy es<br>VIERNES</h1>");
//     break;
//   case "6":
//     document.write("<h1>El día de hoy es<br>SÁBADO</h1>");
//     break;
//   case "7":
//     document.write("<h1>El día de hoy es<br>DOMINGO</h1>");
//     break;
//   default:
//     document.write("<h1>El día de hoy es<br>Desconocido</h1>");
// }

// TODO: Usuario ingresa la hora
// TODO: Si la hora es mayor o igual a 6 y menor o igual a 12: Buenos días
// TODO: Si la hora es mayor o igual a 13 y menor o igual a 18: Buenas tardes
// TODO: Si la hora es mayor o igual a 19 y menor o igual a 23: Buenas noches
// TODO: resto de las horas: Buenas noches

let hora = prompt("Ingresa la hora por favor:");

if (hora >= 6 && hora <= 12) {
  console.log("<h1>Buenos días</h1>");
} else if (hora >= 13 && hora <= 18) {
  console.log("<h1>Buenas tardes</h1>");
} else if (hora >= 19 && hora <= 23) {
  console.log("<h1>Buenas noches</h1>");
} else {
  console.log("<h1>Buenas noches</h1>");
}
