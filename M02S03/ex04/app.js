let image = document.getElementsByClassName('image')[0];
let messagePara = document.querySelector('.message-para');

image.addEventListener('load', () => {
  messagePara.innerText = 'Imaginea s-a incarcat';

  image.addEventListener('click', () => {
    let url = 'http://lorempixel.com/output/food-q-c-350-350-7.jpg'

  alert(`Imaginea cu URLul:${url} s-a incarcat `)
  })
 
});
