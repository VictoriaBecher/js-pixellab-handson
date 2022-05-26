var userName = prompt('Cum te cheama?');
var userNameParagraph = document.getElementById('userName');
var characterCountParagraph = document.getElementById('characterCount');
var characterCount = userName.replaceAll(' ', '').length;
var letter = 'a';
var letterPresenceParagraph = document.getElementById('letterPresence');
var message = '';

if (userName.toLowerCase().includes(letter) === true) {
  message = `Numele include litera ${letter}`;
} else {
  message = `Numele nu include litera ${letter}`;
}

userNameParagraph.innerText = `Ma numesc ${userName}`;
characterCountParagraph.innerText = `Numele introdus are ${characterCount} caractere.`;
letterPresenceParagraph.innerText = message;
