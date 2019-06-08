// Get Second, Minute, Hour hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    // Current time
    const now = new Date();
    // Seconds in current time
    const seconds = now.getSeconds();
    // Seconds degree of rotation +90 to account for 12 o'clock rotation offset
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // Minutes in current time
    const minutes = now.getMinutes();
    // Minutes degree of rotation
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    // Hours in current time
    const hours = now.getHours();
    // Hours degree of rotation
    const hoursDegrees = ((hours / 12) * 360) + 90;

    // rotate each hand (Seconds, Minutes, Hours)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Injecting a variable
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Every second, run setDate()
setInterval(setDate, 1000);