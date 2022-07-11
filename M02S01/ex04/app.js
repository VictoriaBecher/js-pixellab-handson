class Car {
  areLightsOn = false;
  intervalID = 0;
  initialLightState = false;

  constructor(positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = document.createElement('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);
    this.carTop.style.backgroundColor = this.color;

    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.car.append(this.carBody);
    this.carBody.style.backgroundColor = this.color;

    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = document.createElement('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);

    return this;
  }

  // areHazardsOn = false;

  // turnLightsOn() {
  //   this.lightBack.style.backgroundColor = 'red';
  //   this.lightFront.style.backgroundColor = 'red';
  // }

  // turnLightsOff() {
  //   this.lightBack.style.backgroundColor = 'white';
  //   this.lightFront.style.backgroundColor = 'white';
  // }

  // toggleHazards() {
  //   this.interval = setInterval(() => {
  //     this.turnLightsOn();

  //     setTimeout(() => {
  //       this.turnLightsOff();
  //     }, 1000);
  //   }, 2000);
  //   this.areHazardsOn = true;
  // }

  // stopHazards() {
  //   clearInterval(this.interval);
  //   this.areHazardsOn = false;
  // }

  turnLightsOn() {
    this.lightBack.style.backgroundColor = 'red';
    this.lightFront.style.backgroundColor = 'yellow';

    this.areLightsOn = true;

    return this;
  }

  turnLightsOff() {
    this.lightBack.style.backgroundColor = 'white';
    this.lightFront.style.backgroundColor = 'white';

    this.areLightsOn = false;

    return this;
  }

  toggleHazards() {
    const self = this;

    if (self.intervalID !== 0) {
      clearInterval(self.intervalID);
      self.intervalID = 0;

      if (self.initialLightState === true) {
        self.turnLightsOn();
      } else {
        self.turnLightsOff();
      }

      return;
    }

    self.initialLightState = self.areLightsOn;

    self.intervalID = setInterval(function () {
      if (self.areLightsOn === true) {
        self.turnLightsOff();
      } else {
        self.turnLightsOn();
      }
    }, 500);

    return self;
  }

  moveTo(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    return this;
  }

  engageBreak() {
    this.lightBack.style.backgroundColor = 'red';

    return this;
  }

  disengageBreak() {
    this.lightBack.style.backgroundColor = 'white';

    return this;
  }

  changeTireColor(color) {
    this.wheelFront.style.backgroundColor = color;
    this.wheelBack.style.backgroundColor = color;
  }

  changeCapColor(color) {
    this.hubCapFront.style.backgroundColor = color;
    this.hubCapBack.style.backgroundColor = color;
  }

  render() {
    document.body.append(this.frame);

    return this;
  }
}
// const car01 = new Car(140, 140, 'teal');
// car01.render();
// car01.moveTo(400, 500);

const car01 = new Car(300, 16, 'teal').render().turnLightsOn();

const car02 = new Car(200, 300, '#1C8BEF');
car02.render();

car02.changeTireColor('lightblue');
car02.changeCapColor('magenta');
