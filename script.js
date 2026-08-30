const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});


const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }
});


const sections = document.querySelectorAll(".section, .contact-section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {
    observer.observe(section);
});
