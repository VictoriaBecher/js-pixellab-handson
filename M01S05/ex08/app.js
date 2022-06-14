const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const EventListener = () => {
  alert('ai apasat butonul');
};

// button.addEventListener('click', function () {
//   alert('ai apasat butonul!');
// });

button.addEventListener('click', EventListener);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', EventListener);
});
