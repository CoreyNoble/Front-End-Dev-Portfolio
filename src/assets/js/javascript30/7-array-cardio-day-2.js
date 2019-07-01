// ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // some: At least one.
// Array.prototype.every() // every: All of them.

// One adult is >= 19
const oneAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log('Is there an adult in this group?');
console.log(oneAdult);

// All adults are >= 19
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log('Are all people in this group adults?');
console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead of returning a subset of the array, it is going to return the first one that it finds.
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);

console.log('Find a specific comment in an array:');
console.table(comment);

// Array.prototype.findIndex()
// Find the index of the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423);

// Now delete the comment with the ID of 823423

// comments.splice(index, 1); //splice: removes the item in the array.

// new array of updated comments.
const newComments = [
    // ... spread the items into the new array
    // Start at 0, go until index
    ...comments.slice(0, index),
    // start at index + 1
    ...comments.slice(index + 1)
];

console.log('Delete the comment with an id of: 823423');
console.table(comments);