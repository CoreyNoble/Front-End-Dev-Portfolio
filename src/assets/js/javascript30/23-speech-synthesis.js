// Create a new SpeechSynthesisUtterance().
const msg = new SpeechSynthesisUtterance();
// Initialize an array of available voices.
let voices = [];
// <select> of all of the voices.
const voicesDropdown = document.querySelector('[name="voice"]');
// All <input> elements.
const options = document.querySelectorAll('[type="range"], [name="text"]');
// Speak <button>.
const speakButton = document.querySelector('#speak');
// Stop <button>.
const stopButton = document.querySelector('#stop');
// Make the SpeechSynthesisUtterance.text attribute equal to the copy inside of <textarea>.
msg.text = document.querySelector('[name="text"]').value;

// Creates the list of voice <options>.
function populateVoices() {
    // Get all of the voices that are available on speechSynthesis (this).
    voices = this.getVoices();
    // Populate a list of <options> for each voice.
    // Set the innerHTML of voicesDropdown <select>.
    voicesDropdown.innerHTML = voices
        // Only show the english 'en' voices.
        .filter(voice => voice.lang.includes('en'))
        // Map to create an array item for each voice <option>.
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        // Convert to one string.
        .join('');
}

// Change the voice to the newly selected voice <option>.
function setVoice() {
    // Set the new voice by looping over every voice in the voices array. .find() the voice where the voice.name is the same as the <option> value.
    msg.voice = voices.find(voice => voice.name === this.value);
    // Toggle the speech.
    toggle();
}

// Toggle the speech. 
// startOver = true: By default we start the speech over again, but can choose to just stop the speech if we pass startOver = false.
function toggle(startOver = true) {
    // Cancel any current speech.
    speechSynthesis.cancel();
    // If we want to startOver.
    if (startOver) {
        // Restart the speech.
        speechSynthesis.speak(msg);
    }
}

// Set the Options
function setOption() {
    // The name and value of the <option>
    console.log(this.name, this.value);
    // For the message attribute that matches the <option> name, set its' value to match the value that was set inside of that <option>.
    msg[this.name] = this.value;
    // Toggle the speech.
    toggle();
}

// When the 'voiceschanged' event fires, populateVoices(). This is needed before populating the voices in-order to give the browser enough time to have this event ready.
speechSynthesis.addEventListener('voiceschanged', populateVoices);
// When the <select> changes, setVoice().
voicesDropdown.addEventListener('change', setVoice);
// On each <option>, when it changes, setOption().
options.forEach(option => option.addEventListener('change', setOption));
// On 'Speak' <button> click, toggle() the speech.
speakButton.addEventListener('click', toggle);
// On 'Stop' <button> click, toggle() the speech, but don't restart the speech (false).
// Passing an attribute into toggle() should happen every time the button is clicked, not just on page load. That's why we're using an arrow function, to pass 'false' every time the event is fired.
stopButton.addEventListener('click', () => toggle(false));