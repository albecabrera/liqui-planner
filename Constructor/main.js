// CLASES - JAVASCRIPT

class Player {
  constructor(nombre, colorSombrero) {
    this._nombre = nombre;
    this._colorSombrero = colorSombrero;
  }
  saltar() {}
  correr() {}
  saludar() {
    return `Hola soy ${this._nombre} y mi sombre es ${this._colorSombrero}`;
  }
}

let player1 = new Player('Mario', 'rojo');
let player2 = new Player('Luigi', 'verde');

console.log(player1);
console.log(player2);

console.log(player1.saludar());
console.log(player2.saludar());