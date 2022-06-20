var person = {
  name: 'Ana',
  surname: 'Maria',
  age: 36,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested) afiseaza diferenta de
varsta dintre fiecare membru al arrayului friends si ceilalti membri.
Poti folosi metoda pentru a converti numerele negative in pozitive. Intre Larry si Steven este o diferenta de x ani.`);

// for (var i = 0; i < person.friends.length; i++) {
//   var friend = person.friends[i];

//   for (var j = 0; j < person.friends.length; j++) {
//     var innerFriend = person.friends[j];

//     if (friend !== innerFriend) {
//       ageDiff = Math.abs(friend.age - innerFriend.age);
//       console.log(
//         `Intre ${friend.name} si ${innerFriend.name} este o diferenta de ${ageDiff} ani.`,
//       );
//     }
//   }
// }

const pluralize = (value, data) => {
  let message = '';

  if (value === 1) {
    message = data.one;
  } else {
    message = data.many;
  }

  return message;
};

const pluralize2 = (value, data) => {
  const message = value === 1 ? data.one : data.many;

  return message;
};

const friendsCount = person.friends.length;
for (let i = 0; i < friendsCount; i++) {
  const outerFriend = person.friends[i];

  for (let j = 0; j < friendsCount; j++) {
    const innerFriend = person.friends[j];

    if (outerFriend.name === innerFriend.name) {
      continue;
    }

    const ageDiff = Math.abs(outerFriend.age - innerFriend.age);

    console.log(
      `Intre ${outerFriend.name} si ${
        innerFriend.name
      } este o diferenta de ${ageDiff} ${pluralize(ageDiff, {
        one: 'an',
        many: 'ani',
      })}.`,
    );
  }
}