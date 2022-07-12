const stage = document.querySelector('.stage');
let mouseOn = 0;
let mouseOff = 0;
let totalCounter = 0;

stage.addEventListener('mouseover', function () {
  // "this" este elementul de DOM
  const message = 'Mouseul este pe scena';

  mouseOn++;
  totalCounter = mouseOn + mouseOff;

  const messageMouseOnStage = `Mouse-ul a fost pe scena de ${mouseOn} ori`;
  const messageTotalCounter = `Mouse-ul a trecute peste liniile scenei de ${totalCounter}`;

  showMessage('.message', message);
  showMessageMouseOnStage('.messageMouseOnStage', messageMouseOnStage);
  showMessageTotalCounter('.messageTotalCounter', messageTotalCounter);
});

stage.addEventListener('mouseout', function () {
  const message = 'Moseul NU este pe scena';

  mouseOff++;
  totalCounter = mouseOn + mouseOff;

  const messageTotalCounter = `Mouse-ul a trecute peste liniile scenei de ${totalCounter} ori`;

  showMessage('.message', message);
  showMessageTotalCounter('.messageTotalCounter', messageTotalCounter);
});

const showMessage = (targetSelector = '.message', message) => {
  let element = document.querySelector(targetSelector);

  if (element === null) {
    // jQUery avea .text()....
    element = document.createElement('p');
    element.classList.add(targetSelector.replace('.', ''));
    document.body.append(element);
  }

  element.innerText = message;
};

const showMessageMouseOnStage = (
  targetSelector = '.messageMouseOnStage',
  messageMouseOnStage,
) => {
  let elementMouseOn = document.querySelector(targetSelector);

  if (elementMouseOn === null) {
    elementMouseOn = document.createElement('p');
    elementMouseOn.classList.add(targetSelector.replace('.', ''));
    document.body.append(elementMouseOn);
  }

  elementMouseOn.innerText = messageMouseOnStage;
};

const showMessageTotalCounter = (
  targetSelector = '.messageTotalCounter',
  messageTotalCounter,
) => {
  let elementTotalCounter = document.querySelector(targetSelector);

  if (elementTotalCounter === null) {
    elementTotalCounter = document.createElement('p');
    elementTotalCounter.classList.add(targetSelector.replace('.', ''));
    document.body.append(elementTotalCounter);
  }

  elementTotalCounter.innerText = messageTotalCounter;
};
