// Parent <div>
const speed = document.querySelector('.speed');
// Child <div>
const bar = speed.querySelector('.speed-bar');
// <video>
const video = document.querySelector('.flex');

// Handle moving the speed bar. Pass the event (e).
// Using an es5 function() because we need 'this' to be equal to the parent <div>.
function handleMove(e) {
    // Set the Y position, ensuring we anchor it to the parent <div> 'this'.
    const x = e.pageX - this.offsetLeft;
    // Get the percentage filled by dividing y with the height of the parent <div> 'this'.
    const percent = x / this.offsetWidth;
    // Min/Max playback multiplier.
    const min = 0.4;
    const max = 4;
    // Getting a height value for the 'bar'.
    // Math.round() to get a rounded percentage. (percent * 100) to make it a whole number (2, not 0.02).
    const width = Math.round(percent * 100) + '%';
    // Calculate the playbackRate.
    // (max - min) + min: Getting the lower and upper bounds.
    // This ensures the playbackRate isn't a value between 0 and 1, instead, it is a value range between the 'min' and 'max', multiplied by 'percentage'.
    const playbackRate = percent * (max - min) + min;

    // Set the height of the bar, equal to 'height'.
    bar.style.width = width;
    // Set the text of the bar, Using the 'playbackRate' value.
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // Play the video at the speed determined by 'playbackRate'.
    // Default play speed = 1.
    video.playbackRate = playbackRate;
}

// When moving the mouse over the parent <div>, handleMove().
speed.addEventListener('mousemove', handleMove);