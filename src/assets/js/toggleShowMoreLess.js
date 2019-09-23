const Utils = {
    addClass: function(element, theClass) {
        element.classList.add(theClass);
    },

    removeClass: function(element, theClass) {
        element.classList.remove(theClass);
    },

    showMore: function(element, excerpt) {
        element.addEventListener("click", event => {

            event.preventDefault();
            const linkText = event.target.textContent.toLowerCase();

            var notCollapsed = excerpt.getAttribute('data-collapsed') === 'false';
        
            if(notCollapsed) {
                collapseSection(excerpt);
            } else {
                expandSection(excerpt);
                excerpt.setAttribute('data-collapsed', 'false');
            }
            
            if (linkText == "show more +") {
                element.textContent = "Show less -";
                this.removeClass(excerpt, "excerpt-hidden");
                this.addClass(excerpt, "excerpt-visible");
            } else {
                element.textContent = "Show more +";
                this.removeClass(excerpt, "excerpt-visible");
                this.addClass(excerpt, "excerpt-hidden");
            }
        });
    } 
};

const ExcerptWidget = {
    showMore: function(showMoreLinksTarget, excerptTarget) {
        const showMoreLinks = document.querySelectorAll(showMoreLinksTarget);
        
        showMoreLinks.forEach(function(link) {
        const excerpt = link.previousElementSibling.querySelector(excerptTarget);

        Utils.showMore(link, excerpt);
        });
    }
};

ExcerptWidget.showMore('.js-show-more', '.js-excerpt');

function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    
    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';
    
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;
      
      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        element.style.height = 5 + 'rem';
      });
    });
    
    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }
  
  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    
    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';
  
    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function(e) {
      // remove this event listener so it only gets triggered once
      element.removeEventListener('transitionend', arguments.callee);
      
      // remove "height" from the element's inline styles, so it can return to its initial value
      element.style.height = null;
    });
    
    // mark the section as "currently not collapsed"
    element.setAttribute('data-collapsed', 'false');
  }