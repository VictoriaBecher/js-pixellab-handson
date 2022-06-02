// var i = 101;
var i = 1;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// Ce se intampla daca i este initializat cu valoarea 101?
// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// while (i < 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
while (i < 100) {
  console.log(i);

  if (i >= 50) {
    break;
  }

  i++;
}
