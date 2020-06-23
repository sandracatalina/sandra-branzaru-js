let calculateRectangleArea = (L, l) => {
  return L * l;
};

console.warn('Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.');

let totalWallSurface = 0;
let longWallSurface = calculateRectangleArea(6, 2.5);
let shortWallSurface = calculateRectangleArea(4, 2.5);
let doorSurface = calculateRectangleArea(2.2, 1.5);
let windowSurface = calculateRectangleArea(2, 1.5);

totalWallSurface = 2 * (longWallSurface + shortWallSurface);

console.log(`Suprafata necesara este: ${totalWallSurface - doorSurface - windowSurface}`);

console.warn('Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.');

let calculateSquareArea = (l) => {
  let squareSurface = calculateRectangleArea(l, l);

  return squareSurface;
};

console.log(calculateSquareArea(2));


//tema

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.`);

let totalWallSurface1 = 0;
let longWallSurface1 = calculateRectangleArea(12, 2.5);
let shortWallSurface1 = calculateRectangleArea(9, 2.5);
let doorSurface1 = calculateRectangleArea(3, 2);
let windowSurface1 = calculateRectangleArea(3, 2);

totalWallSurface1 = 2 * (longWallSurface1 + shortWallSurface1);
console.log(`Suprafata necesara este: ${totalWallSurface1 - doorSurface1 - windowSurface1}`);

console.warn(`Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().`);

let aggregateSurfaceArea  = (L1, l1, L2, l2) => {
let firstRectangleArea = calculateRectangleArea(L1, l1);
let secondRectangleArea = calculateRectangleArea(L2, l2);
let totalRectangleArea = firstRectangleArea + secondRectangleArea;
  return totalRectangleArea;
};

console.log(`Suprafata totala este ${aggregateSurfaceArea(48, 92, 51, 102)}`);
console.warn(`Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102. `);
