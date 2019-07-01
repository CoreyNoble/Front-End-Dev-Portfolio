function playSound(e) { // Pass the event information along (e)
    // audio/div that matches keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // If there is no corresponding audio, stop the function
    if(!audio) return;

    // Reset audio time to the start
    audio.currentTime = 0;

    // Play
    audio.play(); // Play audio
    key.classList.add('playing'); // Add class
};

function removeTransition(e) {
    // If the transition was not 'transform', stop the function
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing'); // Remove class
}

// Look at all keys, when one is finished transitioning, run removeTransition()
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Listening for key pressed down, run playSound(e)
window.addEventListener('keydown', playSound);