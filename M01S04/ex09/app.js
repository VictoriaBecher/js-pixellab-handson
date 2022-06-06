// var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).

// do {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }

//   i++;
// } while (i < 100);

// Modifica exemplul astfel incat bucla sa
// numere de la 1 la 52
// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
// do {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }

//   i++;
// } while (i < 52);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// var i = 8;
// do {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// } while (i < 32);

// Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita
// superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
var number = prompt('Introdu un numar pentru a-i afisa multiplii');

var minNumber = prompt(
  'Introdu numarul minim de la care sa se afiseze multiplii',
);
var maxNumber = prompt(
  'Introdu numarul maxim pana la care sa se afiseze multiplii',
);

var defaultNumber = 5;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc divizarea cu ${defaultNumber}`;

var defaultMinNumber = 0;
var defaultMinWarningMessage = `Nu ai introdus un numar. Folosesc numarul maxim ${defaultMinNumber}`;

var defaultMaxNumber = 50;
var defaultMaxWarningMessage = `Nu ai introdus un numar. Folosesc numarul maxim ${defaultMaxNumber}`;

if (number === null || number.trim().length === 0) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
} else {
  number = Number(number);
}

if (isNaN(number) === true) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
}

if (minNumber === null || minNumber.trim().length === 0) {
  console.warn(defaultMinWarningMessage);
  minNumber = defaultMinNumber;
} else {
  minNumber = Number(minNumber);
}

if (isNaN(minNumber) === true) {
  console.warn(defaultMinWarningMessage);
  minNumber = defaultMinNumber;
}

if (maxNumber === null || maxNumber.trim().length === 0) {
  console.warn(defaultMaxWarningMessage);
  maxNumber = defaultMaxNumber;
} else {
  maxNumber = Number(maxNumber);
}

if (isNaN(maxNumber) === true) {
  console.warn(defaultMaxWarningMessage);
  maxNumber = defaultMaxNumber;
}

var i = minNumber;

do {
  if (i % number !== 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
} while (i <= maxNumber);
