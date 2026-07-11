document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // เลื่อนเห็น 15% แล้วให้เฟดขึ้นมา
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); // เติมคลาสให้เฟดคืนมา
            } else {
                entry.target.classList.remove("active"); // เลื่อนหนีให้ซ่อนลงไป
            }
        });
    }, observerOptions);

    revealElements.forEach((element) => {
        scrollObserver.observe(element);
    });
});