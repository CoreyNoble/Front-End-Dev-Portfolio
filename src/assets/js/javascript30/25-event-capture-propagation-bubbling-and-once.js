// All <divs>.
const divs = document.querySelectorAll('div');
// The <button>.
const button = document.querySelector('button');

// Event Capture: 
//// When we make a click, the event ripples top->bottom from the document (root), and CAPTURES each element as it makes its' way to the element that fired the event. 
// + Bubbling:
//// When the Event Capture is complete, it then starts to bubble up (bottom->top). Starting at the current DOM <element>, then proceeding on to its' the parent <element>, one at a time, until it gets back up to the document level (root).
function logText(e) {
    // For example:
    // Clicking on <div class="three"> returns 'three', 'two', 'one' when we're looking for the classList on the <div>.
    console.log(this.classList.value);
     // Log the <element>.
     // console.log(this);

     // Propagation:
     //// Stop bubbling (bottom->top).
     // e.stopPropagation();
}

// Listen for a click on each <div>, logText(). Pass a third argument which is an options object{}.
divs.forEach(div => div.addEventListener('click', logText, {
    // Options.
    // Can set CAPTURE to true if you want to fire the event when bubbling first encounters the <element> from the top->bottom.
    capture: false, // false default
    // Only fire the event once.
    // Unbinds itself. Same thing as 'removeEventListener'.
    once: true
}));

// Once:
//// Only fire this event once.
button.addEventListener('click', () => {
    // Event
    alert('Clicked Once');
    }, {
        // Only fire the event once.
        // Unbinds itself. Same thing as 'removeEventListener'.
        once: true
});