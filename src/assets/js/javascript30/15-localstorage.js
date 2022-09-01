const addItems = document.querySelector('.add-items'); // <form>
const itemsList = document.querySelector('.plates'); // <ul>
// 'items' will try to grab an Array of JSON data parsed from an object in localStorage with a key of 'items'. If it does not find the data, fall back to an empty array.
const items = JSON.parse(localStorage.getItem('items')) || [];

// Adds an item to the list.
function addItem(e) { // passes in the event that fired on 'submit'.
    // stops the page from reloading, because we are doing everything client-site. By default, form submit will either re-load the page or submit to an external source.
    e.preventDefault();

    // Text inside of the input
    const text = (this.querySelector('[name=item]')).value;
    // Create the item object
    const item = {
        text, // es6 short hand of 'text: text,'
        done: false // not checked
    };

    // Push the item object into the items array.
    items.push(item);

    // Populate the list.
    populateList(items, itemsList);

    // Set the localStorage 'items' key as JSON data using 'items' variable.
    // JSON.stringify: when you pass in your items, it's going to convert your objects and arrays into a JSON string equivalent.
    localStorage.setItem('items', JSON.stringify(items));

    // localStorage API can also use these methods:
    // localStorage.getItem, localStorage.setItem, localStorage.removeItem (? deleteItem)

    // Clear the input
    this.reset();
}

// Populates the HTML list.
// plates[] starts of as an empty object to ensure it can use .map() even if you forget to pass in something.
// platesList, place to put the HTML.
// These names are unique so any object or list can be passed into this function, which makes it reusable.
function populateList(plates = [], platesList) {
    // .map() will take in an array of raw data (plates), and return an array of some other data (platesList). 
    // plate: object 
    // i: index of the array item
    platesList.innerHTML = plates.map((plate, i) => {
        // Adds an <li> for each item in the array as it loops through
        // plate.done: if plate.done (checked), if not ('')
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join(''); // .join('') takes the array that .map() makes, and turns it into one string.
}

function toggleDone(e) { // passes in the event that fired when <ul> clicked.
    // exit if it's not an input
    if (!e.target.matches('input')) return;
    // Get the element
    const el = e.target;
    // Get the index of the element
    const index = el.dataset.index;
    // Toggle the done state (Opposite of what it was)
    items[index].done = !items[index].done;
    // Save a JSON string from the 'items' array in into localStorage under the key 'items'.
    localStorage.setItem('items', JSON.stringify(items));
    // Populate the list
    populateList(items, itemsList);
}

// Form Submit, addItem(e).
addItems.addEventListener('submit', addItem);
// Item Click on <ul>, toggleDone(e).
itemsList.addEventListener('click', toggleDone);

// Initial population of list when loaded.
populateList(items, itemsList);