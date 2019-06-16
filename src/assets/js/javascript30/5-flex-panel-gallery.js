// Find all panels. Gives us a Node List
const panels = document.querySelectorAll('.panel');

// Toggle Open/Close
function toggleOpen(){
    // Toggle (On/Off) a class of 'open' on this 'panel'
    this.classList.toggle('open');
}

// When 'open' transition is done
function toggleActive(e){
    // Specifically the transition property of: flex
    if(e.propertyName.includes('flex')) {
        // Toggle (On/Off) a clas of 'open-active' on this 'panel'
        this.classList.toggle('open-active');
    }
}

// Listen for a click on each panel, toggleOpen();
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// Listen on each panel for the transition to end, toggleActive(e);
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));