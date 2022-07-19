// se incarca pagina sub 500
// ul.style.display=none
// addEventListener pe h1 (afiseaza/ascunde lista)

// se incarca pagina peste 500
// nu se intampla nimic

// se redimensioneaza pagina sub 500
// ul.style.display=npne
// addEvenListener pe h1 (afiseaza/ascunde lista)

// se redimenseioneaza pagina peste 500
// ul.style.display=block;
// removeEventLIster de pe h1

document.addEventListener('DOMContentLoaded', function () {
  const ulElement = document.querySelector('.ulNavigation');
  const headerElement = document.querySelector('.headerNavigation');

  const onHeaderClick = function () {
    if (ulElement.style.display === 'none') {
      ulElement.style.display = 'block';
    } else {
      ulElement.style.display = 'none';
    }
  };

  if (window.innerWidth < 500) {
    ulElement.style.display = 'none';
    headerElement.addEventListener('click', onHeaderClick);
  }

  window.addEventListener('resize', function () {
    const width = this.innerWidth;

    if (width >= 500) {
      ulElement.style.display = 'block';
      headerElement.removeEventListener('click', onHeaderClick);
    }

    if (width < 500) {
      ulElement.style.display = 'none';
      headerElement.addEventListener('click', onHeaderClick);
    }
  });
});
