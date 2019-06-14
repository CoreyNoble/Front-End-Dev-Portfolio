// Log Intro
console.log('Learning about the difference between a Reference and a Copy.');
console.log('---------');

// Strings, numbers and booleans
console.log('');
console.log('Strings, Numbers and Booleans: All update as they are set.');
console.log('---');

let age = 100;
let age2 = age;

console.log('Age = 100, Age2 = Age')
console.log(`Age: ${age}. Age2: ${age2}.`); // 100, 100
console.log('-');

age = 200;

console.log('Age = 200')
console.log(`Age: ${age}. Age2: ${age2}.`); // 200, 100

let name = 'Corey';
let name2 = name;

console.log('-');
console.log('Name = Corey, Name2 = Name');
console.log(`Name: ${name}. Name2: ${name2}.`); // Corey, Corey

name = 'Noble';

console.log('-');
console.log('Name = Noble')
console.log(`Name: ${name}. Name2: ${name2}.`); // Noble, Corey

console.log('---');
//////////////////////////////////////////////////

// Arrays
console.log('');
console.log('Arrays: Changes to REFERENCES also change the original reference.')
console.log('---');

// We have an array
const family = ['Corey', 'Kaitlin', 'Dante', 'Nimbus'];

// We create a REFERENCE to that array
const team = family;

console.log('Family = [], Team = Family')
console.log('Family:');
console.log(family); // Corey, Kaitlin, Dante, Nimbus
console.log('Team:');
console.log(team); // Corey, Kaitlin, Dante, Nimbus
// You might think we can just do something like this:

team[3] = 'Kyle';
console.log('-');
console.log('Team[3] = Kyle');
console.log('Family:');
console.log(family); // Corey, Kaitlin, Kyle, Nimbus
console.log('Team:');
console.log(team); // Corey, Kaitlin, Kyle, Nimbus

// However what happens when we update that array?
// Oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? 
// One way is to take a copy instead! An empty .slice() makes a copy.
console.log('');
console.log('---');
console.log('Arrays: Ways to COPY an array.')
console.log('---');
const team2 = family.slice();
team2[3] = 'Harry';

console.log('array.slice()');
console.log('Team 2:');
console.log(team2);

// Or you can create a new array and concat the old one in
const team3 = [].concat(family);
team3[3] = 'Hermione';

console.log('-');
console.log('[].concat(Array)');
console.log('Team 3:');
console.log(team3);

// Or use the new ES6 Spread
const team4 = [...family];
team4[3] = 'Ron';

console.log('-');
console.log('[...array]');
console.log('Team 4:');
console.log(team4);

// Or use the Array.from method
const team5 = Array.from(family);
team5[3] = 'Hagrid';

console.log('-');
console.log('Array.from(array)');
console.log('Team 5:');
console.log(team5);

// Now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object

//////////////////////////////////////////////////

// Objects
console.log('');
console.log('---');
console.log('Objects: REFERENCE')
console.log('---');

const person = {
    name: 'Corey Noble',
    age: 26
};

console.log('We have an object.')
console.log('Person:');
console.log(person);

// And think we make a copy:
const captain = person;
captain.number = 99;

console.log('-');
console.log('Captain = Person');
console.log('Captain.number = 99');
console.log('Person:');
console.log(person);
console.log('Captain:');
console.log(captain);

// How do we take a copy instead?
console.log('');
console.log('---');
console.log('Objects: COPY')
console.log('---');

const cap2 = Object.assign({}, person, { number: 99, age: 12 });

console.log('Captain2 = Object.assign({}, person, { number: 99, age: 12 })');
console.log('Person:');
console.log(person);
console.log('Captain2:')
console.log(cap2);

// We will hopefully soon see the object ...spread
// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const corey = {
    name: 'Corey',
    age: 36,
    social: {
        gitHub: 'https://github.com/CoreyNoble'
    }
};

console.log('-');
console.log('Corey:');
console.log(corey);

const corey2 = Object.assign({}, corey);
corey2.age = 100
corey2.social.linkedIn = 'https://ca.linkedin.com/in/corey-noble';

console.log('');
console.log('---');
console.log('OBJECTS: COPY: Need to Know');
console.log('---');
console.log('Object.assign only goes 1 level deep')
console.log('corey2 = Object.assign({}, corey):');
console.log('corey2.age = 100.')
console.log('corey2.social.linkedIn = https://ca.linkedin.com/in/corey-noble');
console.log('Corey:');
console.log(corey);
console.log('Corey 2:');
console.log(corey2);

const corey3 = JSON.parse(JSON.stringify(corey));
corey3.age = 200
corey3.social.facebook = 'https://www.facebook.com/CoreyNoble51';

console.log('-');
console.log('Can find a \'Clone Deep\' function online if you need to clone the entire object.');
console.log('Poor man\'s Deep Clone:');
console.log('corey3 = JSON.parse(JSON.stringify(corey))')
console.log('corey3.age = 200.')
console.log('corey3.social.facebook = https://www.facebook.com/CoreyNoble51');
console.log('Corey:');
console.log(corey);
console.log('Corey 3:')
console.log(corey3);
console.log('---');