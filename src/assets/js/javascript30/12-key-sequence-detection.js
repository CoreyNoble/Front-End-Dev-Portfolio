// Initialize empty array
const pressed = [];
// Code we're looking to detect
const secretCode = '3838404037393739666513';

// When key up, pass the event
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  // Push the key press into the array.
  pressed.push(e.key);
  // Trim the array to ensure we're only looking for the maximum number of characters.
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // If when we join the array and it matches the secretCode, do something.
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
});