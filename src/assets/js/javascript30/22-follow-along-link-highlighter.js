// Page. Parent <div>.
const page = document.querySelector("#javascript30-22");
// Grab every <a> on 'page'.
const triggers = page.querySelectorAll('a');
// <span> element that follows along.
const highlight = document.createElement('span');
// Add a class of 'highlight' to the <span>
highlight.classList.add('highlight');
// Append <span> as a child element to 'page'
page.appendChild(highlight);

// Moves the <span> to the position of the hovered <a> inside of 'page.
function highlightLink() {
    // The bounding client rectangle of the <a> (this).
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    // Coordinates object (Width, Height, Left, Top) populated from the 'linkCoords' bounding rectangle.
    const coords = {
        // Width / Height of the rectangle.
        width: linkCoords.width,
        height: linkCoords.height,
        // Position of the <a> from the (top/left) of the window, PLUS the scroll value (scrollY/scrollX).
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    // Set the Width / Height of the <span> to match the Width / Height of the <a> rectangle.
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    // Set the Position (scrollX, scrollY) of the <span> to match the position of the <a> rectangle.
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// On each <a>, when mouse enters the element, highlightLink().
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));