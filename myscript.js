'use strict';

const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementColorePreferito = document.getElementById('colorepreferito');
const elementNumero = document.getElementById('numero')

// console.log(elementNome);
// console.log(elementCognome);
// console.log(elementColorePreferito);
// console.log (elementNumero);

elementNome.innerHTML = prompt('Inserisci il tuo nome')
elementCognome.innerHTML = prompt('Inserisci il tuo cognome')
elementColorePreferito.innerHTML = prompt('Inserisci il tuo colore preferito')

// Bonus (Returns a random integer from 0 to 99:)
elementNumero.innerHTML = Math.floor(Math.random() * 100);

console.log(elementNome.innerHTML);
console.log(elementCognome.innerHTML);
console.log(elementColorePreferito.innerHTML);
console.log (elementNumero.innerHTML);