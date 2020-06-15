var i = 1;

while (i < 100) {
  console.log(i);

  if (i === 50) {
    break;
  }

  i++;
}
console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 67.Modifica exemplul astfel incat bucla sa numere de la 1 la 66 (dar nu modifica numarul 67).');

console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l),');

var i = 1;

while (i < 67) {
  console.log(i);
  
  if (i === 12) {
    break;
  }

  i++;
}

var i = 1;


console.warn ('Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32'),


var i = 1;
while (i <= 31) {
   i++;
   
   if ((i % 2) != 0) {
       continue;
   }

   console.log(i);
}