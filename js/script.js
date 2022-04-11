const card = document.getElementsByClassName('card')[0]

const toggleElements = document.querySelectorAll('.nav-list a');

toggleElements.forEach(el => {
    el.addEventListener('click', () => {
        card.style.display = 'none';
    });
});