document.addEventListener("DOMContentLoaded", function () {
    const tagline = document.getElementById("tagline");

    let phrases = ["Cybersecurity Enthusiast", "Web Developer", "Ethical Hacker"];
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        let currentPhrase = phrases[index];
        let displayText = deleting
            ? currentPhrase.substring(0, charIndex--)
            : currentPhrase.substring(0, charIndex++);

        tagline.textContent = displayText;

        if (!deleting && charIndex === currentPhrase.length + 1) {
            deleting = true;
            setTimeout(typeEffect, 1000);
        } else if (deleting && charIndex === 0) {
            deleting = false;
            index = (index + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, deleting ? 50 : 100);
        }
    }

    typeEffect();

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});