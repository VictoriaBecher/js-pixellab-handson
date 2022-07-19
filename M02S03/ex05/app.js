document.addEventListener('DOMContentLoaded', function () {
  const debounce = throttleDebounce.debounce;
  let oldWidth = window.innerWidth;
  let oldHeight = window.innerHeight;

  showMessage(oldWidth, 'message');
  showMessage(oldHeight, 'message3');
  showMessage(calculateSurface(oldWidth, oldHeight), 'message5');

  // recipe
  const debounceResize = debounce(1000, function () {
    const newWidth = this.innerWidth;
    const newHeight = this.innerHeight;
    // showMessage(this.innerWidth.toString());
    // showMessage(this.innerHeight.toString());

    if (oldWidth !== newWidth) {
      showMessage(`Fereastra si-a schimbat latimea. ${newWidth}`, 'message2');

      oldWidth = newWidth;
    }

    if (oldHeight !== newHeight) {
      showMessage(
        `Fereastra si-a schimbat inaltimea. ${newHeight}`,
        'message4',
      );

      oldHeight = newHeight;
    }

    showMessage(
      `Fereastra si-a schimbat suprafata. ${calculateSurface(
        newWidth,
        newHeight,
      )}`,
      'message6',
    );
  });

  window.addEventListener('resize', debounceResize);

  // hoising
  function showMessage(message, className = 'message') {
    let paragraphElement = document.querySelector('.' + className);

    if (paragraphElement === null) {
      paragraphElement = document.createElement('p');
      paragraphElement.classList.add(className);
      document.body.append(paragraphElement);
    }

    paragraphElement.innerText = message;
  }

  function calculateSurface(width, height) {
    return width * height;
  }
});
