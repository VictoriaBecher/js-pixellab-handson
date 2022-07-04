class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  topSpeed = 160;
  topReverseSpeed = -50;
  areLightsOn = false;
  isTrunkOpen = false;

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(this.speed);
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  // how to preserver this
  // the modern way
  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

cars.forEach(function (car) {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );
});

// cars.forEach(function (car) {
//   car.decelerate();
//   car.decelerate();
//   car.decelerate();
//   car.decelerate();
//   car.decelerate();

//   console.log(`Viteza noua este ${car.speed} km/h.`);
// });

cars.forEach(function (car) {
  newSpeed = car.speed - 5;

  console.log(`Viteza noua este ${newSpeed} km/h.`);
});
