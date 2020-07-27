let p = document.querySelector('.message');
let p2 = document.getElementById('my-id');
let oldWidth = window.innerWidth;
let p3 = document.getElementById('totalSurface');
let p4 = document.getElementById('loadedSurface')
let height = window.innerHeight;
let width = window.innerWidth;

let calculateSurface = (L, x) => {
 return `Fereastra are acum suprafata de ${L * x} pixeli `;
}

 window.addEventListener('resize', (event) => {
   let newWidth = window.innerWidth;
   let newHeIght = window.innerHeight
   p.innerText = newWidth;
 
   if (newWidth !== oldWidth) {
     p2.innerText = 'Fereastra si-a schimbat latimea.';
   } else {
     p2.innerText = '';
   }

   p3.innerText = calculateSurface(newHeIght, newWidth);
 
   oldWidth = newWidth;
  
 
 });