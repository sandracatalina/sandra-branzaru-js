var person = {
  firstName: 'Angela',
  lastName: 'Autumn',
  email: 'angela.autumn@stories.com',
  birthYear: '1980',
  zipCode: '85029',
  pets: [ {
    name: 'SoftKitty',
    species: 'pisica',
    age: 2

  },

  {
    name: 'WarmKitty',
    species: 'pisica',
    age: 3
  },

  {
    name: 'Littleballoffur',
    species: 'catel',
    age: 4
  }

  ]
};

console.warn(`Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”.
Nu uita de proprietatea length a arrayului pets.`);
console.log(`Numele meu este ${person.firstName} ${person.lastName}  si am ${person.pets.length} animale .`
);


console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);


console.warn(`Afiseaza propozitia: “Unul din cele x animale ale 
mele este species si are age ani.”`);
console.log(`Unul dintre cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`
);


console.warn(`Calculeaza si afiseaza (folosind anul curent) anul de nastere 
al animalului de pe pozitia 2.`);
console.log(new Date(Date.now()).getFullYear() - `${person.pets[2].age}`
);

console.warn(`Calculeaza si salveaza in variabila difference diferenta
de ani dintre persoana si animalul de pe pozitia 0.Foloseste anul curent.`);
var difference = (new Date().getFullYear() - person.pets[0].age) - person.birthYear;
console.warn(`Salveaza numele animalului de pe pozitia
0 intr-o variabila numita petName.`);
var petName = person.pets[0].name;

console.warn(`Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.`);
console.log(`Intre ${person.firstName} si ${person.pets[0].name} este o diferenta de ${difference} ani .`
);


console.warn(`Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`);
var message1Element1 = document.getElementById(`prop01`);
var message = '';
message = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name} si ${person.pets[2].name} locuiesc toti in aceeasi casa.`;
message1Element1.innerText = message;









