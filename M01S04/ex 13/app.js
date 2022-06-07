var globalVariable = 'Ma aflu in contextul global';

// if (true) {
//   var localVariable = 'Ma aflu in contextul local';
//   var globalVariable = 'NU ma alfu in contextul global';

//   console.log(globalVariable);
//   console.log(localVariable);
//   // NU ma alfu in contextul global
//   // Ma aflu in contextul local
// }

// console.log(localVariable);
// // Ma aflu in contextul local

if (true) {
  const localVariable = 'Ma aflu in contextul local';
  let globalVariable = 'NU ma alfu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
  // NU ma alfu in contextul global
  // Ma aflu in contextul local
}

console.log(localVariable);
// app.js:26 Uncaught ReferenceError: localVariable is not defined
