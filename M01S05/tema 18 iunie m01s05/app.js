//Creeaza o functie polimorfica pentru calcularea suprafetelor. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.

let L = prompt('Enter the first parameter :');
let l = prompt('Enter the second parameter :');
let y = prompt('Enter the third parameter :');
    

function calculateSurface (L, l , y) {
    switch (arguments.length) {
        case 1:
            return Math.pow(L, 2); 
        case 2:
            return L * l ;
        case 3:
            return L * l * y;
    }
};

console.log(calculateSurface(L));
console.log(calculateSurface(L, l));
console.log(calculateSurface(L, l, y));

//Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. 

let calculateCircleArea = (a) => {

  return Math.PI * Math.pow(a, 2);
};

console.log(calculateCircleArea(2));

console.log(calculateCircleArea(20));

console.log(calculateCircleArea(16));


//Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.

let pet = {
  getName: function () {
    return `Fluffypet`
  },

  getSpecies: function () {
    return `catelus`
  },

  getAge: function () {
    return `2`
  }
};

//Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani”

console.log(`${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani .`);

//Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”

let petAge = pet.getAge();

console.log(`Animalul meu are ${petAge} ani`);

