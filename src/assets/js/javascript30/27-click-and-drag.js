// The parent <div>.
const slider = document.querySelector('.items');
// Initialise variables
// Flag variable, Are you clicking?
let isDown = false;
// Starting X position.
// When someone clicks down, we need to record that initial x position.
let startX;
// Amount dragged (scroll) value.
let scrollLeft;

// Slider Event Listeners.
// On mouse down.
slider.addEventListener('mousedown', (e) => {
    // Flag. User is clicking.
    isDown = true;
    // Add a class to the slider to show that it's active.
    slider.classList.add('active');
    // Get the starting (x) position of the cursor by getting the event (e) .pageX value. We then minus slider.offsetLeft to anchor the value to the sliders position (offset).
    startX = e.pageX - slider.offsetLeft;
    // The current scrolled position (x) on the slider.
    scrollLeft = slider.scrollLeft;
});

// On mouse leave.
slider.addEventListener('mouseleave', () => {
    // Flag. User is no longer on the element.
    isDown = false;
    // Remove the active class from the slider.
    slider.classList.remove('active');
});

// On mouse up.
slider.addEventListener('mouseup', () => {
    // Flag. User is no longer holding the click.
    isDown = false;
});

// On mouse move. Pass in the event (e).
slider.addEventListener('mousemove', (e) => {
    // Only fire the 'mousemove' event if the user is also 'mousedown'.
    if (!isDown) return;

    // Prevents all default behaviour on the event. Stopping the browser from trying to do something that you don't intend.
    e.preventDefault();

    // Where the cursor is (x) when they move it to the left and right.
    const x = e.pageX - slider.offsetLeft;
    // The Walk: How far have we deviated from that initial x value? (x - startX). 
    // Multiplier: *# = for every pixel scrolled.
    const walk = (x - startX) * 3;
    
    // Scroll the <div>.
    slider.scrollLeft = scrollLeft - walk;
});