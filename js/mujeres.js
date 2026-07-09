document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Scroll suave para enlaces internos
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (!destino) return;

            e.preventDefault();

            destino.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });


    // ==========================
    // Botones de recursos externos
    // ==========================

    document.querySelectorAll("[data-url]").forEach(btn => {

        btn.addEventListener("click", () => {

            const url = btn.dataset.url;

            if (!url) return;

            window.open(url, "_blank");

        });

    });


    // ==========================
    // Animación al hacer scroll
    // ==========================

    const elementos = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    elementos.forEach(item => observer.observe(item));

});

// ==========================
// FAQ Acordeón
// ==========================

const preguntas = document.querySelectorAll(".faq-question");

preguntas.forEach(pregunta => {

    pregunta.addEventListener("click", () => {

        const item = pregunta.parentElement;
        const respuesta = item.querySelector(".faq-answer");
        const icono = pregunta.querySelector("i");

        // Cerrar las demás preguntas

        document.querySelectorAll(".faq-item").forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

                faq.querySelector(".faq-answer").style.maxHeight = null;

                faq.querySelector("i").classList.remove("fa-minus");
                faq.querySelector("i").classList.add("fa-plus");

            }

        });

        // Abrir o cerrar la actual

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            respuesta.style.maxHeight = respuesta.scrollHeight + "px";

            icono.classList.remove("fa-plus");
            icono.classList.add("fa-minus");

        } else {

            respuesta.style.maxHeight = null;

            icono.classList.remove("fa-minus");
            icono.classList.add("fa-plus");

        }

    });

});