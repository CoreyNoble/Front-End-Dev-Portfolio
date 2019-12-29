/* Elements */
const player = document.querySelector('.player'); // parent <div>
const video = player.querySelector('.viewer'); // <video>
const progress = player.querySelector('.progress'); // progress container
const progressBar = player.querySelector('.progress__filled'); // progress bar
const toggle = player.querySelector('.toggle'); // <button> ►/❚❚
const skipButtons = player.querySelectorAll('[data-skip]'); // anything with a 'data-skip' attribute
const ranges = player.querySelectorAll('.player__slider'); // all sliders (volume, playback rate)

/* Functions */
// Pause/Play the <video>
function togglePlay() {
  // if (video.paused){
  //     video.play();
  // } else {
  //     video.pause();
  // }

  // If the video is paused, set the video to playing. If the video is playing, set the video to paused.
  const method = video.paused ? 'play' : 'pause';
  // Append the result to video.
  video[method]();
}

// Toggling the ►/❚❚ characters
function updateButton() {
  // If the <video> (this) is paused, set icon to ►, if the video is playing, set icon to ❚❚.
  const icon = this.paused ? '►' : '❚ ❚';
  // Change the text inside of <button> into the icon text.
  toggle.textContent = icon;
}

// Skip to a new time in the video
function skip() {
  // New video time calculated using the 'data'skip' value (+/-).
  video.currentTime += parseFloat(this.dataset.skip);
}

// Updating slider values
function handleRangeUpdate() {
  // this.name (volume, playback rate) = this.value (current value of the slider).
  video[this.name] = this.value;
}

// Update progress bar
function handleProgress() {
  // Calculate current percentage of progress.
  const percent = (video.currentTime / video.duration) * 100;
  // Setting the size of the progress bar using the percent value.
  progressBar.style.flexBasis = `${percent}%`;
}

// mousedown event on the progress container
function scrub(e) {
  // Based on the event received, Figures out the time we need to scrub to by: grabbing the click position 'e.offsetX' divided by the width of the progress container, times the duration of the video.
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  // Set the video time to the scrubTime.
  video.currentTime = scrubTime;
}

/* Event Listeners */
// On click, Play/Pause.
video.addEventListener('click', togglePlay);
// On video playing, Update button (►/❚❚).
video.addEventListener('play', updateButton);
// On video paused, Update button (►/❚❚).
video.addEventListener('pause', updateButton);
// On Time Update, Update the progress bar.
video.addEventListener('timeupdate', handleProgress);
// On <button> click (►/❚❚), Play/Pause.
toggle.addEventListener('click', togglePlay);
// When an element with a 'data-skip' attribute is clicked, skip().
skipButtons.forEach(button => button.addEventListener('click', skip));
// When the slider changes, handleRangeUpdate().
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// When the mouse moves on the slider, handleRangeUpdate().
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Progress bar events
// Mousedown initially false
let mousedown = false;
// When clicked, begin to scrub().
progress.addEventListener('click', scrub);
// When mouse is moving, pass the event into a function. If the mouse is also down, scrub(e).
progress.addEventListener('mousemove', e => mousedown && scrub(e));
// When the mouse is down, set 'mousedown' to true.
progress.addEventListener('mousedown', () => (mousedown = true));
// When the mouse is up, set 'mousedown' to false.
progress.addEventListener('mouseup', () => (mousedown = false));