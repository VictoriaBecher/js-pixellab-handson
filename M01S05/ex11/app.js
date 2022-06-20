console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca
primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi.
Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.`);

function calculateSurface(L, l, h) {
  const argumentsCount = arguments.length;
  const message = `Invalid signature`;

  switch (argumentsCount) {
    case 1:
      return L ** 2;
      break;
    case 2:
      return L * l;
      break;

    case 3:
      return 2 * (L * l + L * h + l * h);
      break;

    default:
      return message;
  }
}

console.log(calculateSurface());
console.log(calculateSurface(2));
console.log(calculateSurface(4, 2));
console.log(calculateSurface(20, 15, 5));
console.log(calculateSurface(4, 6, 5, 8));

console.warn(`Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si
16.`);
function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
`);

const pet = {
  getName: () => {
    return 'Fast';
  },
  getSpecies: () => {
    return 'turtle';
  },
  getAge: () => {
    return 150;
  },
};

console.warn(
  `a. Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”`,
);

const petNameA = pet.getName();
const petSpeciesA = pet.getSpecies();
const petAgeA = pet.getAge();
console.log(`${petNameA} este ${petSpeciesA} si are ${petAgeA} ani.`);

console.warn(`b. Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza
propozitia: “Animalul meu are petAge ani”`);

const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
