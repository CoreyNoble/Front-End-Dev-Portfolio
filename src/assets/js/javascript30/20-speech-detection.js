// 'SpeechRecognition' is a global variable that lives in the browser. It lives on top of 'window'.
// 'webkitSpeechRecognition' is the global variable for Chrome. Below we're normalizing both names to use the same naming convention.
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instance of SpeechRecognition().
const recognition = new SpeechRecognition();
// See what you are saying, as you are saying it. Without this, the text would only show when the line is finished.
recognition.interimResults = true;

// Create a new <p> element on the document.
let p = document.createElement('p');
// Select the parent div that we want to inject the words into.
const words = document.querySelector('.words');
// Append the <p> as a new child of the parent div.
words.appendChild(p);

// Look for the 'result' event on 'SpeechRecognition'. Pass in the event data (e).
recognition.addEventListener('result', e => {
  // e.results returns a Node List of data that is received from the 'SpeechRecognition' event. We're converting it to an Array (Array.from()) so we can .map() over it.
  const transcript = Array.from(e.results)
    // We're looking for the 'transcript' but it is nested inside of [0: SpeechRecognitionResult] So we're mapping over that nested array.
    .map(result => result[0])
    // Find the 'transcript' data.
    .map(result => result.transcript)
    // Convert the array of data into one string.
    .join('');

  // Set the text content of the new <p> to equal the transcript result.
  p.textContent = transcript;

  // Is the result final?
  if (e.results[0].isFinal) {
    // Overwrite p variable, Create a new <p> element.
    p = document.createElement(p);
    // Append the <p> as a new child of the parent div.
    words.appendChild(p);
  }

  // check to see if the text includes key phrases
  if (transcript.includes('unicorn')) {
    console.log('UNICORN!!');
  }
});

// When the SpeechRecognition ends. Start listening again.
recognition.addEventListener('end', recognition.start);

// Start SpeechRecognition.
recognition.start();