```javascript
// Menu de navigation responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Bouton retour en haut de la page
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation lors du scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');

function checkAnimation() {
    const triggerBottom = window.innerHeight / 5 * 4;

    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkAnimation);

// Appel de la fonction d'animation au chargement de la page
checkAnimation();
```

