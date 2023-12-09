var globalVariable = 'Ma aflu in contextul global';

function contextTest() {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
  // console.log(noVariable);
}

// console.log(localVariable);
//locarVariable is not defined, nu e in contextul global (e doar in functie)

// console.log(localVariable);

contextTest();
// console.log(localVariable);
// localVariable is not defined, nu e in contextul local
