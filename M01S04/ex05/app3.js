// Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla
// si sa afiseze multipli.

var defaultNumber = 2;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc divizarea cu ${defaultNumber}`;

var defaultMaxNumber = 50;
var defaultMaxWarningMessage = `Nu ai introdus un numar. Folosesc numarul maxim ${defaultMaxNumber}`;

var i = 0;
var number = prompt('Introdu un numar pentru a-i afisa multiplii');
// number = number.trim();
var maxNumber = prompt(
  'Introdu numarul maxim pana la care sa se afiseze multiplii',
);
// maxNumber = maxNumber.trim();

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

for (i = 1; i <= maxNumber; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar est multiplu de ${number}`);
}
