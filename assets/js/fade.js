document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); 
            } else {
                entry.target.classList.remove("active"); 
            }
        });
    }, observerOptions);

    revealElements.forEach((element) => {
        scrollObserver.observe(element);
    });
});