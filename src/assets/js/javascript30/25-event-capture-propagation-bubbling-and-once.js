const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // stops bubbling
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, // false default
    once: true
}));

button.addEventListener('click', () => {
    console.log('Click!!!');
    }, {
        once: true // Ensures something can only be fired once
});