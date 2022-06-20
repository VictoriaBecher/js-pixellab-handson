const paragraphElement = document.createElement('p');
const headingElement = document.createElement('h1');
const userAgentString = navigator.userAgent;
// const message = 'Nu stim ce browser folosesti';
let messageBrowser = '';

// if (userAgentString.includes('chrome')) {
//   message = 'Navighez folosind Chrome';
// }

// paragraphElement.innerText = message;

// document.body.append(paragraphElement);

setTimeout(function () {
  setTimeout(function () {
    switch (true) {
      case userAgentString.includes('Chrome'):
        messageBrowser = 'Navighez folosind Chrome';
        browser = 'Chrome';
        break;
      case userAgentString.includes('Mozilla'):
        messageBrowser = 'Navighez folosind Mozilla';
        browser = 'Mozilla';
        break;
      case userAgentString.includes('Internet Explorer'):
        messageBrowser = 'Navighez folosind Internet Explorer';
        browser = 'Internet Explorer';
        break;
      default:
        messageBrowser = 'Nu stim ce browser folosesti';
        browser = 'unknown';
    }

    paragraphElement.innerText = messageBrowser;
    document.body.append(paragraphElement);

    const userName = prompt(`${browser} vrea sa stie cum te cheama?`);
    const messageHeading = `Salut ${userName}`;

    headingElement.innerText = messageHeading;
    document.body.append(headingElement);
  }, 3000);

  paragraphElement.remove();
}, 3000);
