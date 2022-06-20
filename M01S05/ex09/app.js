(function (x) {
  x.test = 'test';
})(window);

console.log(test);

(function () {
  console.log('Hello world!');
})();

(function (window) {
  console.log(`Am rulat si am plecat`);
  window.myName = 'Victoria';
})(window);

console.log(myName);
