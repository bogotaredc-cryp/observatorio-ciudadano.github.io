document.addEventListener("DOMContentLoaded", () => {

  const links = {

    problema:
      "https://forms.gle/deyuhfTaYZPre7vdA",

    ambiente:
      "https://forms.gle/t72XgVAXNdoLGguc6",

    seguridad:
      "https://forms.gle/Xdf5kkhEWLjADTtC8",

    propuestas:
      "https://wa.me/573236815265?text=Hola,%20tengo%20una%20idea%20para%20Bogotá",

    comunidad:
      "",

    secop:
      null

  };



  const cards = document.querySelectorAll(".card");



  cards.forEach(card => {

    card.addEventListener("click", () => {

      const key = card.dataset.link;

      const url = links[key];



      if(url){

        window.open(
          url,
          "_blank"
        );

      }

      else{

        showModal();

      }

    });

  });



  function showModal(){

    alert(

`🔎 Transparencia

Próximamente encontrarás:

✓ Scrapling para los contratos del  SECOP2

✓ Herramientas de vigilancia ciudadana para verificar posibles casos de corrupcion 

✓ Datos e indicadores`

    );

  }

});