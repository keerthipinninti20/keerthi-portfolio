// Navbar shadow on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


// Smooth reveal animation

const sections = document.querySelectorAll(
    ".section, .stats-section, .exploring-section, .contact-section"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.1
});


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.7s ease";

    observer.observe(section);

});
