//p2 ex08
console.warn('Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse (document html nou).');

var number = prompt(`Enter number: `);
var upperLimit = prompt(`Enter upperlimit `);
var i = 5;

while (i<= upperLimit) {
  if (i % number === 0) {
    console.log(i);
  }

  i++;
}