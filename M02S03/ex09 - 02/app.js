const ulElement = document.querySelector('.ulNavigation');
const headerElement = document.querySelector('.headerNavigation');

function onHeaderClick() {
  if (ulElement.style.display === 'none') {
    ulElement.style.display = 'block';
  } else {
    ulElement.style.display = 'none';
  }
}

const mediaQueryString = '(max-width: 500px)';
const mediaQueryList = window.matchMedia(mediaQueryString);

if (mediaQueryList.matches) {
  ulElement.style.display = 'none';
  headerElement.addEventListener('click', onHeaderClick);
}

mediaQueryList.addEventListener('change', function (event) {
  const matches = event.matches;

  if (matches === true) {
    ulElement.style.display = 'none';
    headerElement.addEventListener('click', onHeaderClick);
  } else {
    headerElement.removeEventListener('click', onHeaderClick);
    ulElement.style.display = 'block';
  }
});
