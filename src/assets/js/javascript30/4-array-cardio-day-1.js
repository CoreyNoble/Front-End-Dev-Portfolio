// ## Array Cardio Day 1

// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);

console.log('Years 1500-1599:');
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// Map: takes in an array, does something with that array and then returns a NEW array with the SAME LENGTH. Like a machine that takes in a material, modifies it and outputs the modified material.
// `${variable}` is an example of a template string.
const fullNames = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);

console.log('Full Names:');
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// Sort: Get two items, asked to sort those two items, if a > b, a++, b--. Bubbling the items up and down inside of the array.
// Turnery operator ? 1 : -1 (short-hand if(),else())
const ordered = inventors.sort((firstPerson, secondPerson) =>
  firstPerson.year > secondPerson.year ? 1 : -1
);

console.log('Oldest to Youngest:');
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// Reduce: Easier way to do a for loop
// Gives you a running total of what you've returned from this function last time.
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); // passing in ,0 will ensure 'total' is never undefined.

console.log('Total Years: ' + totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year; // how old did they live to be?
  const nextGuy = b.passed - b.year; // how old did they live to be?
  return lastGuy > nextGuy ? -1 : 1; // sort the inventors
});

console.log('Oldest to Youngest Lived:');
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Query the document for all classes .mw-category
// const category = document.querySelector('.mw-category');

// Query 'category' for a list of links. Convert from Node List to an Array
// const links = Array.from(category.querySelectorAll('a'));

// Map 'links' to create an array of 'textContent' strings.
// Filter the array to only include strings with 'de'.
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Takes in 'people' and sorts them alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  // Create first name and last name constants (a + b), by splitting the string.
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  // Sort by 'people' by their last name constants
  return aLast > bLast ? 1 : -1;
});

console.log('Sort by Last Name, Alphabetically');
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
];

// Reduce data into an array of vehicle types 'obj[]' with a counter 'item'.
const transportation = data.reduce(function(obj, item) {
  // Chekcs if the obj[item] exists, if not, initializes the obj[item] to 0.
  if (!obj[item]) {
    obj[item] = 0;
  }
  // Increment the value
  obj[item]++;

  return obj;
}, {}); // ,{} start with a blank object

console.log('Reduce data into an array of objects:');
console.log(transportation);