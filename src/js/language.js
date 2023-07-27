document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("changeLanguage").addEventListener("click", function() {
    var translations = [
      {
        id: "textElement",
        es: "Hola! Aquí podrás encontrar un poco de la música y glitch art que usualmente hago en mi tiempo libre. Por ahora no hay mucho, pero espero que te guste lo que hay, puedes navegar por los botones de arriba para ver más como mi galería o mis redes sociales, o paginas que encuentro utiles o entretenidas. Tambien puedes dejar un mensaje en mi guestbook si quieres, o si tienes alguna sugerencia o comentario puedes contactarme en mis redes sociales :).",
        en: "Hi! Here you can find some of the music and glitch art I usually make in my free time. For now there is not much, but I hope you like what there is, you can browse the buttons above to see more like my gallery or my social networks, or pages that I find useful or entertaining. You can also leave a message in my guestbook if you want, or if you have any suggestions or comments you can contact me on my social networks :)."
      },
      {
        id: "textElement2",
        es: "Paginas Utiles",
        en: "Useful Sites"
      },
        {
        id: "textElement3",
        es: "Galeria",
        en: "Gallery"
        },
        {
        id: "textElement4",
        es: "Que hay de nuevo?",
        en: "What's new?"
        },
        {
        id: "textElement5",
        es: "02/Julio/2023: Añadi una sección de Galeria al sitio.",
        en: "July 2, 2023: I added a Gallery section to the site."
        },
        {
        id: "textElement6",
        es: "05/Julio/2023: Reemplazé el Guestbook original de Firebase (RIP por alguna razón) por 123Guestbook.com.",
        en: "July 5, 2023: I replaced the original Firebase Guestbook (RIP for some reason) with 123Guestbook.com."
        },
        {
        id: "textElement7",
        es: "Nombre:",
        en: "Name:"
        },
        {
        id: "textElement8",
        es: "Actualmente:",
        en: "Currently:"
        },
        {
        id: "textElement9",
        es: "Programando... Estudiando... Haciendo musica y glitches... :)",
        en: "Programming... Studying... Making music and glitches... :)"
        },
        {
        id: "textElement10",
        es: "Jugando:",
        en: "Playing:"
        },
        {
            id: "textElement11a",
            es: "Eres el visitante número:",
            en: "You are visitor number:"
        },
        {
            id: "textElement11b",
            html: "<a href='http://stuff.mit.edu/doc/counter-howto.html'><img src='http://stuff.mit.edu/cgi/counter/zombot' alt='several'></a>"
        },
        {
        id: "textElement12",
        es: "Sitio hecho con ♥️ y Tailwind CSS",
        en: "Website made with ♥️ and Tailwind CSS"
        },
        {
        id: "textElement13",
        es: "19/Julio/2023: Añadi un botón para cambiar el idioma del sitio y un banner con efecto 3D.",
        en: "July 19, 2023: I added a button to change the language of the site and a 3D effect banner."
        },
        {
        id: "textElement14",
        es: "20/Julio/2023: Añadi un cursor personalizado.",
        en: "July 20, 2023: I added a custom cursor."
        }
    ];

  for (var i = 0; i < translations.length; i++) {
      var element = document.getElementById(translations[i].id);
      if (element.textContent.trim() === translations[i].es.trim()) {
          element.textContent = translations[i].en;
      } else {
          element.textContent = translations[i].es;
      }
  }
  });
});



