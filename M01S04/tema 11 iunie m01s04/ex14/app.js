var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987, 
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2, 
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};

console.warn(`Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `);

var message = "";
person.pets.forEach(function (pet) {
  message += `${pet.name}`
});
console.log(message);


console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);
let totalAge= 0;

for (i=0; i < person.pets.length; i++) {
  let pet = person.pets[i];
  totalAge += pet.age;
}

console.log(totalAge);

console.warn(`Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`);

person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani`);
})

console.warn(`Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`);
let ageDiff = 0;
for(i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var currentYear = new Date(Date.now()).getFullYear();
  var personAge = currentYear - person.birthYear;
  ageDiff = personAge - pet.age;

  console.log(`Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`)
  
}

console.warn(`Folosind o bucla for afiseaza in ordine inversa numele animalelor din array. `);
var message = "";

person.pets.reverse();
for (i = 0; i < person.pets.length; i++) {
  let pet = person.pets[i];
  message += pet.name + ` `;

}

console.log(message);
person.pets.reverse();

console.warn(`La fel si cu forEach()`);

message = ``;
person.pets.reverse();
person.pets.forEach(function(pet){
  message += pet.name + ` `;
})

console.log(message);
person.pets.reverse();

console.warn(`Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am si este cu y ani mai mic decat mine.” `);
let ageDiff1 = 0;
var oldestage = 0;

for (i = 0; i < person.pets.length; i++) {
  let pet = person.pets[i];

  if (pet.age >= oldestage) {
    oldestage = pet.age
  }

  var currentYear = new Date(Date.now()).getFullYear();
  var personAge = currentYear - person.birthYear;
  ageDiff1 = personAge - oldestage;

 }


 for (i = 0; i < person.pets.length; i++) {
  var oldestpet = person.pets[i];
  if (oldestpet.age = 10) {
    continue;
  }
 }

console.log(`${oldestpet.name} este cel mai batran animal pe care il am si este cu ${ageDiff1} ani mai mic decat mine. `);


//

console.warn('Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.');
message = 'Am ';

person.pets.forEach(function(pet, i, pets) {
  var punctuation = `, `
  message += pet.species;

 
  if (i === pets.length - 1) {
    punctuation = '. ';
}

if (i === pets.length - 2 ) {
    punctuation = ' si  '
}

message += punctuation;
});

console.log(message);


