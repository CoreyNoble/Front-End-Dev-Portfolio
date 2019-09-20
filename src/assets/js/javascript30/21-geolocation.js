const arrow = document.querySelector('.arrow'); // Compass
const speed = document.querySelector('.speed-value'); // Speed

// Listen for the users' updated position. 'watchPosition'.
// 'getPosition' is static and is only called once.
navigator.geolocation.watchPosition((data) => {
    console.log(data);
    // Set the text content of 'speed' to the value of 'data.coords.speed' (Default is km/h).
    speed.textContent = data.coords.speed;
    // Rotate the Compass using the value from 'data.coords.heading' as the set degree of rotation (# of degrees relative to north).
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => { // User denies the webcam request.
    console.error(err);
    alert('This application requires access to your geo-location in-order to function');
});