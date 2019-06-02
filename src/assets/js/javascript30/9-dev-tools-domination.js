const dogs = [{ name: 'Dante', age: 5 }, { name: 'hugo', age: 8 }];

// Regular
console.log('Regular console.log message:');

// Interpolated
const value = 'VALUE';
console.log('Vanilla console.log with a %s in its\' string!', 'VALUE');
console.log(`ES6 console.log with a ${value} in its\' string`);

// Styled
console.log('%c Styled console.log', 'font-size: 3em; background: #6dbfbf; text-shadow: 2px 2px 0 #888888');

// warning!
console.warn('WARNING console.log');

// Error :|
console.error('ERROR console.log');

// Info
console.info('Information console.log');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Firing console.log when a test fails');

// clearing
// console.clear();
console.log('console.clear would clear the console.');

// Viewing DOM Elements
console.log('console.log a DOM element (p)')
console.log(p);
console.log('console.dir will show you the dropdown of options for a DOM element (p)')
console.dir(p);

// Grouping together
console.log('Looping Through, Grouping Together:')
dogs.forEach(dog => {
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.log('Counting # of occurances:');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');

// timing
console.log('Find out how long something takes:');
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// display a table
console.log('console.table to display a table of data:')
console.table(dogs);