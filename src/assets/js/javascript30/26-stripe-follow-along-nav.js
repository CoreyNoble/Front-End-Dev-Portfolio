// All of the <li> that are direct descendants > of '.cool'.
const triggers = document.querySelectorAll('.cool > li');
// Puppy div. Absolutely positioned background <div>.
// Using .querySelecor, not .querySelecorAll because we just want that one element.
const background = document.querySelector('.dropdownBackground');
// Navigation <ul>.
const nav = document.querySelector('.top');

// When the mouse enters the <li>.
function handleEnter() {
    // Staged approach to the animation. First we display: block; then opacity: 1; This will step in the animation.

    // 'this': <li>
    // Add a class of '.trigger-enter'.
    // The class changes display:none; to display:block;.
    this.classList.add('trigger-enter');

    // We create an arrow function to keep <li> as (this).
    // 'this' in an arrow function () =>: <li>.
    // 'this' in a normal function(): window.

    // Because this class is added on a delay, we use an arrow function to check that the class is there first.
    // () => this.classlist.contains
    // If 'this' is true (()=> this, ), Run the the next line (&&).
    // Add a class of '.trigger-enter-active'.
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150); // Time delay.
    
    // Show the dropdown background.
    background.classList.add('open');

    // The <element> (this) with a class of '.dropdown'.
    const dropdown = this.querySelector('.dropdown');
    // The bounding rectangle of the 'dropdown' <element>.
    // Inside of .getBoundingClientRect() is the data we need to determine the position of the element on the page (top,left), as well as the size of the element (width, height).
    const dropdownCoords = dropdown.getBoundingClientRect();
    // The bounding rectangle of the 'nav' <element>.
    // We get the coordinates of the 'nav' to ensure the puppy div 'background' follows the 'nav' position.
    const navCoords = nav.getBoundingClientRect();

    // The coordinates we will move and size the puppy div, 'background'.
    const coords = {
        // Width and height are the same as the 'dropdownCoords' width and height.
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        // Top and left = 'dropdown' top and left, (-) 'nav' top and left.
        // Here we are taking our dropdownCoords and we are offsetting them with the top of the nav. So if the nav moves, so do the coordinates that we will be setting on 'background'.
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
    }

    // Set the 'width', 'height' and 'transform' (position) of the puppy div 'background'.
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

// When the mouse leaves the <li>.
function handleLeave() {
    // Remove (this) <li> from view. Set back to 'display: none;', 'opacity: 0;'.
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    // Hide the dropdown background.
    background.classList.remove('open');
}

// On each <li>, listen for the Mouse to enter, handleEnter().
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
// On each <li>, listen for the Mouse to leave, handleLeave().
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));