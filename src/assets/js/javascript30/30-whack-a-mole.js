// A Node List of each '.hole' <element>.
const holes = document.querySelectorAll('.hole');
// Score <span>.
const scoreBoard = document.querySelector('.score');
// A Node List of each '.mole' <element. child <div> of '.hole.'
const moles = document.querySelectorAll('.mole');
// Start <button>.
const startCTA = document.getElementById('start-cta');
// Initialize variables.
let lastHole;
let timeUp = false;
let score = 0;

// Creates a random time, using 'min' and 'max' values.
function randomTime(min, max) {
    // Return a random number between the 'min' and 'max' values. Round the number.
    return Math.round(Math.random() * (max - min) + min);
}

// Get me a random DOM element 'hole' using a Node List 'holes'.
function randomHole(holes) {
    // A random index of holes.
    const idx = Math.floor(Math.random() * holes.length);
    // Set the 'hole' using the index.
    const hole = holes[idx];

    // If 'hole' is the same as 'lastHole'.
    if (hole === lastHole) {
        // Re-run this function.
        return randomHole(holes);
    }

    // Save the 'hole' that popped up the last time this function was called.
    lastHole = hole;
    // Return the hole.
    return hole;
}

// Pop up a mole.
function peep() {
    // Get a random time, passing min/max time.
    const time = randomTime(200, 1000);
    // Get a random 'hole' using all of the 'holes'.
    const hole = randomHole(holes);
    // Animate in the mole. Add a class to pop it up.
    hole.classList.add('up');
    // The time the mole spends popped up.
    setTimeout(() => {
        // Hide the mole. Remove the class that pops it up.
        hole.classList.remove('up');
        // If the time is not up, pop up another mole, peep().
        if (!timeUp) peep();
    }, time); // Duration, random 'time'.
}

// Start the gamr.
function startGame() {
    // Reset the board and game variables.
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;

    // Pop up a mole, peep().
    peep();
    // Set 'timeUp'. Will become true after the provided interval.
    setTimeout(() => timeUp = true, 10000)
}

// Hit a mole.
function bonk(e) {
    // Is the event a trusted event? We want to check for cheat clicks using JavaScript.
    if(!e.isTrusted) return; // cheater! Exit the function.

    // Increase the score.
    score++;
    // Remove the 'up' class to hide the mole.
    this.parentNode.classList.remove('up');
    // Update the 'score' on the 'scoreBoard'.
    scoreBoard.textContent = score;
}

// Event Listeners.
// For each 'mole' inside of the 'moles' Node list, on 'click', bonk(e).
moles.forEach(mole => mole.addEventListener('click', bonk));
// When the Start <button> is clicked, startGame().
startCTA.addEventListener('click', startGame);