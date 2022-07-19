//  studiu:
const buttons = document.querySelectorAll('button');
const boxes = document.querySelectorAll('.box');
// const box = document.querySelector('.box');
const colorInput = document.querySelector('.dynamicColorForm input');
const removeButton = document.querySelector('.thirdButton');

const radioButtons = document.querySelectorAll('input[name="boxRadio"]');
const regex = /[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}/g;

// array-like object
buttons.forEach(function (button) {
  const textColor = button.innerText.toLowerCase();

  button.style.backgroundColor = textColor;
});

document.addEventListener('click', function (event) {
  // recipe
  // console.log(event.target);
  const target = event.target;

  radioButtons.forEach(function (radioButton) {
    if (radioButton.checked === true) {
      if (target.classList.contains('thirdButton')) {
        return;
      }

      if (target.nodeName === 'BUTTON' && target.type === 'button') {
        radioButton.parentElement.style.backgroundColor =
          target.style.backgroundColor;
      }
    } else {
      radioButton.parentElement.style.backgroundColor = '#ffffff';
    }
  });
});

colorInput.addEventListener('change', function () {
  const dynamicButton = this.previousElementSibling;

  if (regex.test(this.value)) {
    dynamicButton.style.backgroundColor = this.value;
  } else {
    alert('invalid hex');
  }
});

colorInput.parentElement.addEventListener('submit', function (event) {
  // const form = this;
  const dynamicButton = this.querySelector('button[type="button"]');

  dynamicButton.style.backgroundColor = colorInput.value;

  event.preventDefault();
});

removeButton.addEventListener('click', function () {
  boxes.forEach(function (box) {
    box.removeAttribute('style');
  });
});
