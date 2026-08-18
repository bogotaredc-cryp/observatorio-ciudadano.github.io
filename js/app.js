document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     EQUIPO DE TRABAJO
  ========================= */

  const team = {

    laura: {
      nombre: "Laura Gómez",
      cargo: "Orientación jurídica",
      descripcion: "Apoyo y orientación frente a situaciones legales.",
      icono: "fa-whiteboard fa-semibold fa-at",
      link: "https://forms.gle/AAAA1111"
    },

    andres: {
      nombre: "Andrés Rodríguez",
      cargo: "Medio ambiente",
      descripcion: "Orientación sobre situaciones y problemáticas ambientales.",
      icono: "fa-whiteboard fa-semibold fa-at",
      link: "https://forms.gle/BBBB2222"
    },

    camila: {
      nombre: "Camila Torres",
      cargo: "Mujeres y equidad",
      descripcion: "Orientación y acompañamiento para mujeres.",
      icono: "fa-whiteboard fa-semibold fa-at",
      link: "https://forms.gle/CCCC3333"
    },

    daniel: {
      nombre: "Daniel Martínez",
      cargo: "Protección animal",
      descripcion: "Orientación frente a situaciones relacionadas con animales.",
      icono: "fa-whiteboard fa-semibold fa-at",
      link: "https://forms.gle/DDDD4444"
    }

  };


  /* =========================
     LINKS PRINCIPALES
  ========================= */

  const links = {

    problema:
      "https://forms.gle/deyuhfTaYZPre7vdA",

    ambiente:
      "https://forms.gle/t72XgVAXNdoLGguc6",

    animales:
      "otra-voz.html",

    seguridad:
      "https://forms.gle/Xdf5kkhEWLjADTtC8",

    mujeres:
      "savewomans.html",

    propuestas:
      "https://wa.me/573107768773?text=Hola,%20tengo%20una%20idea%20para%20Bogotá",

    comunidad:
      "https://chat.whatsapp.com/7Fp35aEuQnSKL2y3mxfApI?s=sw&p=i&ilr=4&amv=0",

    secop:
      null,

    OurTeam:
      null

  };


  /* =========================
     TARJETAS
  ========================= */

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    card.addEventListener("click", () => {

      const key = card.dataset.link;

      const url = links[key];

      if (url) {

        window.open(url, "_blank");

      } else {

        showModal(key);

      }

    });

  });


  /* =========================
     MODALES
  ========================= */

  function showModal(section) {

    switch (section) {

      case "OurTeam":

        showTeamModal();

        break;


      case "secop":

        alert(`🔎 Transparencia

Próximamente encontrarás:

✓ Consulta de contratos públicos.

✓ Herramientas de vigilancia ciudadana.

✓ Indicadores y datos abiertos para fortalecer el control social.`);

        break;


      case "comunidad":

        alert(`👥 Red Ciudadana Bogotá

Estamos construyendo una comunidad para conectar ciudadanos comprometidos con Bogotá.

Próximamente podrás:

✓ Unirte a la red.
✓ Participar en iniciativas.
✓ Recibir convocatorias y novedades.`);

        break;


      default:

        alert("Esta sección estará disponible próximamente.");

    }

  }


  /* =========================
     MODAL DEL EQUIPO
  ========================= */

  function showTeamModal() {

    const modal = document.createElement("div");

    modal.className = "team-modal-overlay";


    modal.innerHTML = `

      <div class="team-modal">

        <button
          class="team-modal-close"
          aria-label="Cerrar"
        >
          &times;
        </button>


        <div class="team-modal-header">

          <div class="team-modal-icon">

            <i class="fa-solid fa-users"></i>

          </div>


          <h2>
            Comunícate con nuestro equipo
          </h2>


          <p>
            Selecciona el área que puede orientarte.
            Completa el formulario y nuestro equipo
            recibirá tu solicitud.
          </p>

        </div>


        <div class="team-list">

          ${Object.entries(team).map(([id, person]) => `

            <a
              href="${person.link}"
              target="_blank"
              rel="noopener noreferrer"
              class="team-person"
            >

              <div class="team-person-icon">

                <i class="fa-solid ${person.icono}"></i>

              </div>


              <div class="team-person-info">

                <h3>
                  ${person.nombre}
                </h3>

                <span>
                  ${person.cargo}
                </span>

                <p>
                  ${person.descripcion}
                </p>

              </div>


              <div class="team-person-arrow">

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

              </div>

            </a>

          `).join("")}

        </div>

      </div>

    `;


    document.body.appendChild(modal);


    /* Cerrar con X */

    const closeButton =
      modal.querySelector(".team-modal-close");

    closeButton.addEventListener("click", () => {

      modal.remove();

    });


    /* Cerrar haciendo click fuera */

    modal.addEventListener("click", (event) => {

      if (event.target === modal) {

        modal.remove();

      }

    });


    /* Cerrar con ESC */

    const closeWithEscape = (event) => {

      if (event.key === "Escape") {

        modal.remove();

        document.removeEventListener(
          "keydown",
          closeWithEscape
        );

      }

    };


    document.addEventListener(
      "keydown",
      closeWithEscape
    );

  }

});