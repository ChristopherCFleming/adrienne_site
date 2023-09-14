// The functions below are for the old hidden functionality on the main page

var readMoreElements = document.querySelectorAll('.read-more');

readMoreElements.forEach(function(element) {
  element.addEventListener('click', function() {
    var paragraph = this.previousElementSibling;
    paragraph.classList.toggle('expanded');
    if (paragraph.classList.contains('expanded')) {
      paragraph.style.maxHeight = 'none';
      paragraph.style.transition = 'max-height 2s ease'
      this.textContent = 'Read Less';
    } else {
      paragraph.style.maxHeight = '4em'; // Adjust this value to display the desired number of lines
      this.textContent = 'Read More';
    }
  });
});


// The functions below are for the new functionaity on the Policy page:

const accordions = document.querySelectorAll('.accordion');

function toggleAccordion() {
    const ul = this.querySelector('ul');
    const expand = this.querySelector('.expand');

    if (ul.style.display === 'none' || ul.style.display === '') {
        ul.style.display = 'block';
        expand.textContent = 'Read Less';
    } else {
        ul.style.display = 'none';
        expand.textContent = 'Read More';
    }
}

accordions.forEach(accordion => {
    const expand = accordion.querySelector('.expand');
    expand.addEventListener('click', toggleAccordion.bind(accordion));
});



