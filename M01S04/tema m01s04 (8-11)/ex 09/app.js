var i = 1;

do {
  console.log(i);

  i++;
} while (i < 100);

console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).`);

var i = 1;

do {
  console.log(i);
if (i === 50) {
  break;
}
 
i++; 

} while (i < 100);

// tema
console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 52 `);

var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 52);

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 51.`);

var i = 1;

do {
  console.log(i);
  i++;
} while (i < 52);

console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)`);

var i = 1;

do {
  console.log(i);
if (i === 12) {
  break;
}
 
i++; 

} while (i < 52);

console.warn(`Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32 (bucla noua). `);

var i = 0;
do {
  if (i % 2 !== 0) {
    console.log(i);
  }
i++;

} while (i<32)
