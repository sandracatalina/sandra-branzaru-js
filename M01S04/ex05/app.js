var i;
var testNumber = window.promt('introdu numarul:') ||2;
var upperLimit = window.prompt('Introdu limita:') ||10;

for (i = 0; i<=upperLimit; i++) {
  console.log(i);
  if (i % testNumber !==0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${testNumber}. `);
}