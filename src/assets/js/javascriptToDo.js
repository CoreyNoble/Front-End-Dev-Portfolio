var close = document.getElementsByClassName("close");
var list = document.getElementById("todoOutput");
var myNodelist = document.getElementsByClassName("todoItem");

var cols = document.querySelectorAll('#todoOutput .todoItem');

// Update the app
function update(cols) {
  removeItem();

  // Update columns for Drag & Drop
  cols = document.querySelectorAll('#todoOutput .todoItem');
  [].forEach.call(cols, addDnDHandlers);

  // Loop the function
  window.setTimeout(update, 1000);
}

// Create a "close" button and append it to each list item
function nodeList() {
  for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.setAttribute("tabindex", "0");
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
}

// Click on a close button to hide the current list item
function removeItem() {
  for (var i = 0; i < close.length; i++) {
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
}
// Checked Item
// Checked Item (CLICK)
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  } else if (event.target.tagName === 'P') {
    event.target.parentNode.classList.toggle('checked');
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
function newItem() {
  var li = document.createElement("li");
  var p = document.createElement('p');
  var inputValue = document.getElementById("todoInput").value;
  var t = document.createTextNode(inputValue);

  // LI attributes
  li.setAttribute("tabindex", "0");
  li.setAttribute("class", "todoItem");
  li.setAttribute("draggable", "true");
  li.appendChild(p).appendChild(t);
  
  // If input is empty
  if (inputValue === '') {
    // Error, Need to add text
    alert("You must write something!");
  } else { // Otherwise
    // Add Entry
    document.getElementById("todoOutput").appendChild(li);
  }
  // Empty Input
  document.getElementById("todoInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.setAttribute("tabindex", "0");
  li.appendChild(span);
}

 
/* Drag & Drop */
var dragSrcEl = null;

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false)
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}

function handleDragStart(e) {
  // Target (this) element is the source node.
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

  this.classList.add('dragElem');
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  this.classList.add('over');

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    //alert(this.outerHTML);
    //dragSrcEl.innerHTML = this.innerHTML;
    //this.innerHTML = e.dataTransfer.getData('text/html');
    this.parentNode.removeChild(dragSrcEl);
    var dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    var dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
    
  }
  this.classList.remove('over');
  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  this.classList.remove('over');

  /*[].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });*/
}

nodeList();
update();