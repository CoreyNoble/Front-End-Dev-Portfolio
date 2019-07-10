const total = document.querySelector('.total-time');

// Select all nodes with a data-time attribute. Returns a 'Node List' so we're converting it into an array so we can use .map().
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
    // will get data-time string '0:00'.
    .map(node => node.dataset.time)
    
    .map(timeCode => {
        // An array with mins, secs for each entry. Split string at ':' to separate mins and secs. .map(parseFloat) to map the strings to an array of numbers.
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        // Return the timecode.
        return (mins * 60) + secs;
    })
    // .reduce(): Takes in an array, and return what you want.
    // Take all of the numbers and reduce them down to one big number.
    // Takes in each videos' seconds and adds them to the total.
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
// Calculate hours remaining (seconds / 3600) to a round number (Math.floor()).
const hours = Math.floor(seconds / 3600);
// Get the remainder (%) after we calculate hours (3600).
secondsLeft = secondsLeft % 3600;

// Calculate minutes remaining (secondsLeft / 60) to a round number (Math.floor()).
const mins = Math.floor(secondsLeft / 60);
// Get the remainder (%) after we calculate minutes (60).
secondsLeft = secondsLeft % 60;

// Output: Hours, Minutes, Seconds
console.log(hours, mins, secondsLeft);

total.innerHTML = hours + ":" + mins + ":" + secondsLeft;