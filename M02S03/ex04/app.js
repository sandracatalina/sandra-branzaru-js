let image = document.getElementsByClassName('image')[0];
let messagePara = document.querySelector('.message-para');

image.addEventListener('load', () => {
  messagePara.innerText = 'Imaginea s-a incarcat';
  // add img click event listener
});