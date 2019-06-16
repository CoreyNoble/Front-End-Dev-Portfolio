// Select all of the checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// Reference to the input that was last checked
let lastChecked;

// (e) passing in the event
function handleCheck(e) {
  // Will determine if we are still in-between the two checked inputs
  let inBetween = false;

  // Check if they had the shift key down AND check that they are checking the input (this)
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);

      // If the checkbox is either the current item, OR is the lastChecked item
      if (checkbox === this || checkbox === lastChecked) {
        // Flip 'inBetween' polarity
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      // If 'inBetween' is correct
      if (inBetween) {
        // Check the checkbox
        checkbox.checked = true;
      }
    });
  }

  // Set the input that was last checked
  lastChecked = this;
}

// On click handleCheck(e)
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));