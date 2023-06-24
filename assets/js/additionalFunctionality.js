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
      paragraph.style.maxHeight = '3.6em'; // Adjust this value to display the desired number of lines
      this.textContent = 'Read More';
    }
  });
});