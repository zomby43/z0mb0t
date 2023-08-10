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
        id: "textElement14",
        es: "09/Agosto/2023: Nuevo banner, cursor, guestbook, arte :).",
        en: "09/August/2023: New banner, cursor, guestbook, art :)."
        }
    ];
    for (var i = 0; i < translations.length; i++) {
        var element = document.getElementById(translations[i].id);
        if (element && translations[i].es && translations[i].en) {
            if (element.textContent.trim() === translations[i].es.trim()) {
                element.textContent = translations[i].en;
            } else {
                element.textContent = translations[i].es;
            }
        }
    }
  });
});



