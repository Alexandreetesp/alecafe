const elementsToFade = document.querySelectorAll('.fade-in, .fade-in2');

function fadeInOnScroll() {
    elementsToFade.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.style.opacity = 1;
            element.style.transform = 'translateX(0)'; /* Move para a posição normal */
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);