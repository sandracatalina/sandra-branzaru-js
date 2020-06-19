let calculateRectangleArea = function (L, l) {
  let surface = L * l;
  return surface;
};

console.warn('Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?');
let firstSurface = calculateRectangleArea(100, 250);
let secondSurface = calculateRectangleArea(350, 200);
const barleyYield = 25;
let firstFieldYield = firstSurface * barleyYield;
let secondFieldYield = secondSurface * barleyYield;

console.log(`Diferenta este: ${secondFieldYield - firstFieldYield}.`);

console.warn('Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m');

const barleyQty = 10;
const beerYield = 2.5;
let thirdSurface = calculateRectangleArea(400, 370);
let thirdFieldYield = thirdSurface * barleyYield;
let finalBeer = thirdFieldYield / barleyQty * beerYield;

console.log(`Cantitatea de bere este: ${finalBeer}.`);

console.warn(`Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina. Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.`);

let fieldSurface = calculateRectangleArea(300, 200);
const flourYield = 32;
let theFieldYield = fieldSurface * flourYield;
const flourQty = 1;
const breadYield = 2.5;
let finalBread = theFieldYield / flourQty * breadYield;

console.log(`Un camp de 300 pe 200 metri produce ${finalBread} kg de paine.`);

console.warn(`Dar doua campuri de 150 pe 200 si 500 pe 300 in total?`);

let fieldSurface1 = calculateRectangleArea(150, 200);
let fieldSurface2 = calculateRectangleArea(500, 300);
const theflourYield = 32;
let totalFieldSurface = fieldSurface1 + fieldSurface2;
let totalFieldYield = totalFieldSurface* theflourYield;
const theflourQty = 1;
const thebreadYield = 2.5;
let totalfinalBread = totalFieldYield / theflourQty * thebreadYield;

console.log(` Doua campuri de 150 pe 200 si 500 pe 300 in total ${totalfinalBread} kg de paine.`);