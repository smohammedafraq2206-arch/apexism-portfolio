// APEXISM — Smooth interactions

document.addEventListener("DOMContentLoaded", () => {

    // Reveal elements when they enter the screen
    const elements = document.querySelectorAll(
        ".project, .service, .process-list > div"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });


    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});