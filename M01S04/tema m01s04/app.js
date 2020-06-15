var i;
console.warn(`Modifica exemplul a.i bula sa numere de la 1 la 89.`);

for (i=1; i<=89; i++) {
  console.log(i) ;
}

console.warn(`Modifica exemplul a. i. bucla sa numere de la 1 la 88 .`);

for (i=1; i<89; i++) {
  console.log(i);
}


console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.`);

for (i=1; i<=89;) {
  console.log(i);
  
  if (i === 42) {
    break;
  }

  i++;
}

console.warn(`Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89. `);

for (i=1; i<=89; i++) {  
  if (i % 2 === 0)  {
    continue;
  }
console.log(i);
}

console.warn(`In mod similar, afiseaza doar numerele care sunt divizibile cu 3. `);

for (i=1; i<=89; i++){
  if (i % 3 !== 0) {
  continue;
 }
 console.log(i);
}

//fizzbuzz

console.warn (`Bucla incepe la 1 si numara pana la 100 inclusiv, in mod normal. Dar, in loc de numere divizibile cu 3 scrie Fizz si in loc de numere divizibile cu 5 scrie Buzz.`);

for (i=1; i<=100; i++) {
  if (i % 3 == 0) 
  
  console.log("Fizz");

  if (i % 5 == 0)
  console.log("Buzz");
}

//fizzbuzz + restul numerelor afisate
console.warn (`Bucla incepe la 1 si numara pana la 100 inclusiv, in mod normal. Dar, in loc de numere divizibile cu 3 scrie Fizz si in loc de numere divizibile cu 5 scrie Buzz.`);

for (i=1; i<=100; i++) {
  if (i % 3 == 0) 
  console.log("Fizz");

  else if (i % 5 == 0)
  console.log("Buzz");

  else console.log(i);
}
