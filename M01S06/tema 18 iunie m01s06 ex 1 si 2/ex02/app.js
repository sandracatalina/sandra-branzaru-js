let paragraphElement = document.createElement('p');
let userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';
let browserName = 'Browser';
let userName = 'Vasilica';

if (Array.isArray(userAgentString.match(/chrome/ig))) {
  message = 'Navighezi folosind Chrome';
  browserName = 'Chrome';
}

if (Array.isArray(userAgentString.match(/firefox/ig))) {
  message = 'Navighezi folosind Firefox';
  browserName = 'Firefox';
}

paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(() => {
  userName = prompt(`${browserName} vrea sa stie cum te cheama.`);
  let h1 = document.createElement('h1');
  h1.innerText = userName;

  document.body.appendChild(h1);

  // setTimeout(() => {}, 3000);
}, 3000);


//tema


// Adauga mesaj pentru pentru Edge.
//Dupa ce apare elementul h1, asteapta inca 3 secunde si elimina paragraful initial din DOM folosind metoda .remove()


if (Array.isArray(userAgentString.match(/Edge/ig))) {
  message = 'Navighezi folosind Edge';
  browserName = 'Microsft Edge';
}
paragraphElement.innerText = message;
document.body.appendChild(paragraphElement);

setTimeout( function () {
  
  paragraphElement.remove();
},6000);


setTimeout(() => {
  userName = prompt(`${browserName} vrea sa stie cum te cheama.`);
  let h1 = document.createElement('h1');
  h1.innerText = userName;
  document.body.appendChild(h1);

  // setTimeout(() => {}, 3000);

}, 3000);




