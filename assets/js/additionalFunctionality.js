// This section is the vanilla DOM manipulation to give the "read more" buttons in the platform page functionality.

function toggleVisibility(button) {
    const section = button.parentElement;
    const content = section.querySelector('ul');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else {
        content.classList.add('hidden');
        button.textContent = 'Read More';
    }
}