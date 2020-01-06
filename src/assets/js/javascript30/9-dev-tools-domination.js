const dogs = [
  { name: 'Dante', age: 5 },
  { name: 'hugo', age: 8 }
];

// Regular Console Log
console.log('Regular console.log message:');

// Interpolated Console Log (Inject data)
const value = 'VALUE';
console.log("Vanilla console.log with a %s in its' string!", 'VALUE');
console.log(`ES6 console.log with a ${value} in its\' string`);

// Styled Console Log
console.log(
  '%c Styled console.log',
  'font-size: 3em; background: #6dbfbf; text-shadow: 2px 2px 0 #888'
);

// Warning! Console Log
console.warn('WARNING console.log');

// Error Console Log
console.error('ERROR console.log');

// Info Console Log
console.info('Information console.log');

// Console Log an error if something is false (assert)
const p = document.querySelector('p');
console.assert(
  p.classList.contains('ouch'),
  'Firing console.log when a test fails'
);

// clearing the console
// console.clear();
console.log('console.clear would clear the console.');

// Viewing DOM Elements
console.log('console.log a DOM element (p)');
// .log: Display the element
console.log(p);
console.log(
  'console.dir will show you the dropdown of options for a DOM element (p)'
);
// .dir: display available methods and properties for that element
console.dir(p);

// Grouping together
console.log('Looping Through, Grouping Together:');
dogs.forEach(dog => {
  // Beginning of a group of logs for each dog. .groupCollapse would set them as collapsed data in the output.
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  // End a group log
  console.groupEnd(`${dog.name}`);
});

// Counting
console.log('Counting # of occurrences:');
// Corey: 1
console.count('Corey');
// Steve: 1
console.count('Steve');
// Corey: 2
console.count('Corey');
// Corey: 3
console.count('Corey');
// Steve: 2
console.count('Steve');

// Timing
console.log('Find out how long something takes:');
// Start timing how long until this is next returned.
console.time('fetching data');
// Fetch some data to demonstrate how to log how long it takes.
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    // End the timer by returning the same value
    console.timeEnd('fetching data');
    console.log(data);
  });

// Take an array of objects. Assuming they all have the same properties, display the data as a table in the console.
console.log('console.table to display a table of data:');
console.table(dogs);