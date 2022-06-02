var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).

do {
  console.log(i);

  if (i === 50) {
    break;
  }

  i++;
} while (i < 100);
