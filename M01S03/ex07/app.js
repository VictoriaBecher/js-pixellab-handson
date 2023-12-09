var prop01Li = document.getElementById('prop01');
var prop02Li = document.getElementById('prop02');
var prop03Li = document.getElementById('prop03');
var prop04Li = document.getElementById('prop04');

var person = {
  firstName: 'Andreea',
  lastName: 'Popescu',
  email: 'andreea.popescu@gmail.com',
  birthYear: 2000,
  pets: [
    {
      name: 'Fast',
      species: 'broasca testoasa',
      age: 30,
    },
    {
      name: 'Praslea',
      species: 'pisica',
      age: 7,
    },
    {
      name: 'Joy',
      species: 'caine',
      age: 5,
    },
  ],
  zipCode: '500500',
};

console.warn(`Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a
arrayului pets.`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);
console.log((2023 - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe
pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`);
var difference = 2023 - person.birthYear - person.pets[0].age;
console.log(`${difference}`);

console.warn(
  `Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.`,
);
var petName = person.pets[0].name;
console.log(`${petName}`);

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

console.warn(`Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket
  notation pe arrayul pets)`);
var prop01 =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ' si ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa.';

console.log(prop01);
prop01Li.innerText = prop01;

console.warn(
  `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2`,
);
var difference02 = person.pets[0].age - person.pets[2].age;
var prop02 = `Diferenta de varsta intre ${person.pets[0].name} si ${person.pets[2].name} este de: ${difference02} ani.`;

console.log(prop02);
prop02Li.innerText = prop02;

console.warn(`Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este:
zipCode”`);
var prop03 = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in anul ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

console.log(prop03);
prop03Li.innerText = prop03;

console.warn(`Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent
pentru a efectua scaderea.`);
var birthYearTurtle = 2023 - person.pets[0].age;
var birthYearCat = 2023 - person.pets[1].age;
var birthYearDog = 2023 - person.pets[2].age;

var prop04 = `Animalele mele s-au nascut in ${birthYearTurtle}, ${birthYearCat}, respectiv ${birthYearDog}.`;

console.log(prop04);
prop04Li.innerText = prop04;
