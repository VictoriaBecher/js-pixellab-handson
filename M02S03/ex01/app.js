class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate(accelerateCoefficient) {
    if (accelerateCoefficient) {
      this.speed += accelerateCoefficient;
    } else {
      this.speed++;
    }

    return this;
  }

  decelerate(decelerateCoeffiecient) {
    if (decelerateCoeffiecient) {
      this.speed -= decelerateCoeffiecient;
    } else {
      this.speed--;
    }

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;

    this.displaySpeed();

    return this;
  }

  displaySpeed(speedClass) {
    let paragraphElement = document.querySelector(`.${speedClass}`);

    if (paragraphElement === null) {
      paragraphElement = document.createElement('p');
      paragraphElement.classList.add(speedClass);

      document.body.append(paragraphElement);
    }
    paragraphElement.innerText = `Viteza este ${this.speed} km/h`;
  }
}

var audi = new Car('Audi', 'black', 4, 50);

// audi
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .decelerate()
//   .decelerate()
//   .decelerate();

//  console.log(audi.speed);

audi.accelerate(12).decelerate(3).decelerate(4);

audi.displaySpeed();

audi.setSpeed(4).accelerate();
