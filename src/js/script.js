"use strict";

// Gesamtbilanz anlegen
let einnahmen = 0;
console.log(einnahmen + 10);
let ausgaben = 0;
let bilanz = 0;

// Eingabedaten holen
let titel_1 = prompt("Titel:");
let type_1 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag_1 = prompt("Betrag (in Cent:");
let datum_1 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${titel_1}
  Typ: ${type_1}
  Betrag: ${betrag_1} ct
  Datum: ${datum_1}`);

if (type_1 === "Einnahme") {
  einnahmen = einnahmen + betrag_1;
  bilanz = bilanz + betrag_1;
} else if (typ_1 === "Ausgabe") {
  ausgaben = ausgaben + betrag_1;
  bilanz = bilanz - betrag_1;
} else {
  console.log(`Der Typ "${typ_1}" ist nicht bekannt.");
}

let titel_2 = prompt("Titel:");
let type_2 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag_2 = prompt("Betrag (in Cent:");
let datum_2 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${titel_2}
  Typ: ${type_2}
  Betrag: ${betrag_2} ct
  Datum: ${datum_2}`);

if (type_2 === "Einnahme") {
  einnahmen = einnahmen + betrag_2;
  bilanz = bilanz + betrag_2;
} else if (typ_2 === "Ausgabe") {
  ausgaben = ausgaben + betrag_2;
  bilanz = bilanz - betrag_2;
} else {
  console.log(`Der Typ "${typ_1}" ist nicht bekannt.");
}

// Gesamtbilanz ausgeben
let positiv = bilanz >= 0;

console.log(Einnahmen: ${einnahmen} ct
Ausgabren: ${ausgaben}ct
Bilanz:${bilanz} ct
Bilanz ist positiv:${positiv}``
);
