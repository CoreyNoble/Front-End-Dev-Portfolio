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
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    var t = document.createTextNode(inputValue);
    li.setAttribute("tabindex", "0");
    li.setAttribute("class", "todoItem");
    li.setAttribute("draggable", "true");
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

 
/* Drag & Drop */
var dragSrcEl = null;

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

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false)
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);

}

var cols = document.querySelectorAll('#todoOutput .todoItem');
[].forEach.call(cols, addDnDHandlers);

