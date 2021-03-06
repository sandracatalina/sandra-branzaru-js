var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache'
  },
  {
    name: 'Larry',
    surname: 'Larryson'
  },
  {
    name: 'Steven',
    surname: 'Stevenson'
  },
  {
    name: 'Carol',
    surname: 'Carolson'
  },
  {
    name: 'Andra',
    surname: 'Andrason'
  }
];

console.warn('Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.');
var message = '';
var arrayLength = friends.length;
var i = 0;

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];
  var space = i !== arrayLength - 1 ? ', ' : '.';

  message += `${friend.surname}${space}`;
}

console.log(message);

console.warn('Afiseaza numele complet al tuturor prietenilor, insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul keywordului break.');
message = '';

for (i = 0; i < arrayLength; i++) {
  var friend  = friends[i];

  message += `${friend.name} ${friend.surname}`;

  if (friend.name === 'Steven') {
    message += '.';
    break;
  } else {
    message += ', ';
  }
}

console.log(message);

console.warn('Folosind keywordul continue, afiseaza numele complet al prietenilor, doar daca numarul de caractere total al numelor lor este mai mare de 13.');

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];

  if ((friend.name + friend.surname).length <= 13) {
    continue;
  }

  console.log(`${friend.name} ${friend.surname}`);
}

console.warn(`Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.`);
var message= ``;
var arrayLength = friends.length;
var i = 0;
for (i=0; i < arrayLength; i++) {
  var friend = friends[i]
  var space = i !== arrayLength -1? '' : '';
  message += `${friend.name}${space}`;
}

console.log(message);


console.warn(`Afiseaza numele complet al tuturor prietenilor.`);

message = ``;
for (i=0; i < arrayLength; i++) {
  var fruebd = friends [i];
  message += `${friend.name} ${friend.surname}`;
  if (i === friends.length-1) {
    message += `.`;
  }
  else {
    message += `,`;
  }
}
console.log(message.trim());

console.warn(`Folosind keywordul break, afiseaza numele complet al prietenilor dar opreste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.`);
var message = ``;
for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];

  message += `${friend.name} ${friend.surname}  `;
  if (friend.surname.length >= 9) {
    break
  }
}
console.log(message.trim());


