const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  accelerate: function () {
    this.speed++;
  },
  decelerate: () => {
    this.speed--;
  },
};
