// Get all of the inputs
// .querySelectorAll gives us a Node List, which is different than an Array and changes what operations we can use on it. For example, Array allows us to use Map, Filter and Reduce; whereas a Node List allows forEach.
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // Store the suffix value if a [data-sizing] attribute is on the element, otherwise store ''.
  const suffix = this.dataset.sizing || '';
  // Set the style of each variable name using the new value and suffix
  document
    .getElementById('javascript30-3')
    .style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listen for change and mouse move on each input. Node List forEach operation
inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Arrow function
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));