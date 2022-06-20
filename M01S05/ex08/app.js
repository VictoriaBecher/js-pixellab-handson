const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const queryButton = document.getElementById('query');
const paragraph = document.getElementById('message');

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

queryButton.addEventListener('click', () => {
  const age = prompt('Care este varsta ta?');
  const message = `Ai ${age} ani.`;
  console.log(message);
  paragraph.innerText = message;
});
