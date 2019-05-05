// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.setAttribute("tabindex", "0");
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var list = document.getElementById("todoOutput");
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  // If Close is Clicked
  close[i].onclick = function() {
    var li = this.parentElement;
    li.remove();
  }
  // If 'Enter' on Close Focus
  close[i].addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Enter
      // Cancel the default action, if needed
      event.preventDefault();
      var li = this.parentElement;
      li.remove();
    }
  }, false);
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById('todoOutput');
// Checked Item (CLICK)
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);
// Checked Item (ENTER)
list.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // Enter
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    event.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoInput").value;
  var t = document.createTextNode(inputValue);
  li.setAttribute("tabindex", "0");
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todoOutput").appendChild(li);
  }
  document.getElementById("todoInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.setAttribute("tabindex", "0");
  li.appendChild(span);
}