const video = document.querySelector('#player'); // <video>
const canvas = document.querySelector('#photo'); // <canvas>
const ctx = canvas.getContext('2d'); // canvas context
const strip = document.querySelector('.strip'); // photo strip
const snap = document.querySelector('.snap'); // <audio>
const photoCTA = document.querySelector('#photoCTA'); // Photo <button>
const greenScreen = document.querySelector('input[value="greenScreen"]');
const redShift = document.querySelector('input[value="redShift"]');
const rgbShift = document.querySelector('input[value="rgbShift"]');
// const ghosting = document.querySelector('input[name="ghosting"]');

// Getting the video stream
function getVideo() {
  // The way you get a user's video. Only getting video, not audio.
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      
      // Set the <video> source to be the local media stream.
      video.srcObject = localMediaStream;
      // Play the <video>.
      video.play();
    })
    // User denies the webcam request.
    .catch(err => {
      // Error
      console.error(`OH NO!!!`, err);
    });
}

// Copying the video feed onto the <canvas> as image data so we can manipulate the pixels.
function paintToCanvas() {
  // Set the <canvas> dimensions (width, height) to match the video dimensions.
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  // Uncheck other filters
  // Green Screen
  if (greenScreen.checked == true){
    rgbShift.checked = false;
    redShift.checked = false;
  }
  // Red Effect
  else if (redShift.checked == true){
    greenScreen.checked = false;
    rgbShift.checked = false;
  }
  // RGB Split
  else if (rgbShift.checked == true){
    greenScreen.checked = false;
    redShift.checked = false;
  }

  // Paint less often than the video feed.
  return setInterval(() => {
    // Draw the image onto the canvas context using the video source, starting from origin (0,0) ending at the end of the canvas (width,height).
    ctx.drawImage(video, 0, 0, width, height);
    // Take the pixels out of the context. Each pixel has 4 values associated with it: red, green, blue, and alpha. 'pixels' represents an array of 'ImageData' which contains a number value for each channel(r,g,b,a) on each pixel (0(r), 1(g), 2(b), 3(a), 4(r), 5(g)...)
    let pixels = ctx.getImageData(0, 0, width, height);

// Uncheck other filters
  // Green Screen
  if (greenScreen.checked == true){
    pixels = pixelKnockout(pixels);
  }
  // Red Effect
  else if (redShift.checked == true){
    pixels = redEffect(pixels);
  }
  // RGB Split
  else if (rgbShift.checked == true){
    pixels = rgbSplit(pixels);
  }
  // Ghosting Effect
  // Sets the Alpha globally, will persist every frame (fade out effect) until the alpha is equal to 0.
  // if (ghosting.checked == true){
  //   ctx.globalAlpha = 0.8;
  // }

    // Put the pixels back into the context
    ctx.putImageData(pixels, 0, 0);
  }, 16); // interval delay.
}

// SET FILTERS
function filter(pixels){
  console.log('fired');
      
  }

// Take a photo
function takePhoto() {
  // Reset the <audio>
  snap.currentTime = 0;
  // Play the <audio>
  snap.play();

  // Take the data out of the canvas and convert it to an image .toDataURL('image/jpeg'). This creates a 'base64' string representation of an image.
  const data = canvas.toDataURL('image/jpeg');
  // Create an <a>
  const link = document.createElement('a');
  // <a> Path
  link.href = data;
  // Attributes on the <a>. 'download' to save the file, 'handsome' for the file name.
  link.setAttribute('download', 'handsome');
  // Inside of the <a>. create an <img> (thumbnail).
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  // Insert the <a> before the first child of the strip.
  strip.insertBefore(link, strip.firstChild);
}

// FILTER FUNCTIONS
// Create a red effect
function redEffect(pixels) {
  // Loop over every single pixel. (+=4 to skip to the next pixel)
  for (let i = 0; i < pixels.data.length; i+=4) {
    // Manipulate the values for each channel
    // i+0 = Red (r)
    // Increase the value for Red.
    pixels.data[i + 0] = pixels.data[i + 0] + 200;
    // i+1 = Green (g)
    // Decrease the value for Green.
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    // i+2 = Blue (b)
    // Half the value for Blue.
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }
  // Return the manipulated pixel values.
  return pixels;
}

// Shift the RGB values
function rgbSplit(pixels) {
  // Loop over every single pixel.
  for (let i = 0; i < pixels.data.length; i+=4) {
    // i+/- = move the pixel right(+) or left(-)
    // = i+0 = Red (r)
    pixels.data[i - 150] = pixels.data[i + 0];
    // i+1 = Green (g)
    pixels.data[i + 500] = pixels.data[i + 1];
    // i+2 = Blue (b)
    pixels.data[i - 550] = pixels.data[i + 2];
  }
  // Return the manipulated pixel values.
  return pixels;
}

// Make pixels transparent within a specified range.
function pixelKnockout(pixels) {
  // Object that holds the min/max range
  const levels = {};

  // For each slider.
  document.querySelectorAll('.rgb input').forEach((input) => {
    // Sets the attributes and their values as key:value in the object.
    // Eg. <input min=0, max=255 name="rmin">
    levels[input.name] = input.value;
  });

  // For each 
  for (let i = 0; i < pixels.data.length; i = i + 4) {
    // Figure out what the (r,g,b,a) items are.
    const red = pixels.data[i + 0];
    const green = pixels.data[i + 1];
    const blue = pixels.data[i + 2];
    const alpha = pixels.data[i + 3];

    // If the pixel data for each channel is in-between the min and max values.
    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // turn the alpha for that pixel (i+3) to 0.
      pixels.data[i + 3] = 0;
    }
  }

  // Return the manipulated pixel values.
  return pixels;
}
// /FILTER FUNCTIONS

// Initialise the video.
getVideo();

// If the video is allowed to play, paintToCanvas()
video.addEventListener('canplay', paintToCanvas);

// When <button> is clicked, takePhoto().
photoCTA.addEventListener('click', takePhoto);

// Filter Events
greenScreen.addEventListener('click', paintToCanvas);
redShift.addEventListener('click', paintToCanvas);
rgbShift.addEventListener('click', paintToCanvas);
// ghosting.addEventListener('click', paintToCanvas);