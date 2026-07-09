document.addEventListener("DOMContentLoaded", () => {

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
      null,

    comunidad:
      "https://wa.me/573236815265?text=Hola,%20tengo%20una%20idea%20para%20Bogotá",

    secop:
      null

  };


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


  function showModal(section) {

    switch (section) {

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

});

