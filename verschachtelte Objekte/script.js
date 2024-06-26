// let inhaber_1 = {
//   vorname: "Alberto",
//   nachname: "Cabrera",
//   geschlecht: "maennlich",
//   alter: 45,
// };
// console.log(inhaber_1);

// let inhaber_2 = {
//   vorname: "Maria",
//   nachname: "Morena",
//   geschlecht: "weiblich",
//   alter: 35,
// };

// console.log(inhaber_2);

// let iban = "DE6206752564419854",
// let bic = "WEASE5PXHK",
// let kontostand = 3500,
// let aktiv = true,

let konto_1 = {
  iban: "DE6206752564419854",
  bic: "WEASE5PXHK",
  inhaber: {
    vorname: "Alberto",
    nachname: "Cabrera",
    geschlecht: "maennlich",
    alter: 45,
  },
  kontostand: 3500,
  aktiv: true,
};

console.log(konto_1);

let konto_2 = {
  iban: "DE6206752564419706",
  bic: "WEASE5PXHK",
  inhaber: {
    vorname: "Maria",
    nachname: "Morena",
    geschlecht: "weiblich",
    alter: 35,
  },
  kontostand: 5500,
  aktiv: true,
};

console.log(konto_2);

// Objekt für ein Auto anlegen

// - Marke
// - Modell
// - Kraftstoff
// - Kilometerstand
// - Ausstattung
//     - Navigationssystem
//     - Klimaanlage
//     - Sitzheizung
//     - Tempomat
//     - Panoramadach
// - Zustand
// - Preis

mein_auto = {
  marke: "BMW",
  modell: "X5",
  kraftstoff: "Diesel",
  kilometerstand: 10000,
  ausstattung: {
    navigationssystem: true,
    klimaanlage: true,
    sitzheizung: true,
    tempomat: true,
    panoramadach: true,
  },
  zustand: "neu",
  preis: 50000,
};
/*
- schnappt euch Auto-Objekt aus letzter Lektion
- fügt Eingenschaft PS hinzu
- verändert das MODELL des Autos
- gebt Template-String "Ein ... ... hat ...PS..." aus
console.log(mein_auto);
*/

auto.ps = 150;
auto.modell = "X6";
console.log("Ein ${auto.marke} ${auto.modell} hat ${auto.ps} PS");
