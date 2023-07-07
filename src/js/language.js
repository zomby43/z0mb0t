document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("changeLanguage").addEventListener("click", function() {
    var textElement = document.getElementById("textElement");
    var textElement2 = document.getElementById("textElement2");
    var textElement3 = document.getElementById("textElement3");
    var textElement4 = document.getElementById("textElement4");
    var textElement5 = document.getElementById("textElement5");
    var textElement6 = document.getElementById("textElement6");
    var textElement7 = document.getElementById("textElement7");
    var textElement8 = document.getElementById("textElement8");
    var textElement9 = document.getElementById("textElement9");
    var textElement10 = document.getElementById("textElement10");
    var textElement11 = document.getElementById("textElement11");
    var textElement12 = document.getElementById("textElement12");

    if (textElement.innerHTML === "Hola! Aquí podrás encontrar un poco de la música y glitch art que usualmente hago en mi tiempo libre.") {
      textElement.innerHTML = "Hello! Here you can find some of the music and glitch art I usually do in my free time.";
    } else {
      textElement.innerHTML = "Hola! Aquí podrás encontrar un poco de la música y glitch art que usualmente hago en mi tiempo libre.";
    }

    if (textElement2.innerHTML === "Paginas Utiles") {
      textElement2.innerHTML = "Useful Sites";
    } else {
      textElement2.innerHTML = "Paginas Utiles";
    }

    if (textElement3.innerHTML === "Galeria") {
      textElement3.innerHTML = "Gallery";
    } else {
      textElement3.innerHTML = "Galeria";
    }

    if (textElement4.innerHTML === "Que hay de nuevo?") {
      textElement4.innerHTML = "What's new?";
    } else {
      textElement4.innerHTML = "Que hay de nuevo?";
    }

    if (textElement5.innerHTML === "02/Julio/2023: Añadi una sección de Galeria al sitio.") {
      textElement5.innerHTML = "July 2, 2023: I added a Gallery section to the site.";
    }
    else {
        textElement5.innerHTML = "02/Julio/2023: Añadi una sección de Galeria al sitio.";
    }

    if (textElement6.innerHTML === "05/Julio/2023: Reemplazé el Guestbook original de Firebase (RIP por alguna razón) por 123Guestbook.com.") {
      textElement6.innerHTML = "July 5, 2023: I replaced the original Firebase Guestbook (RIP for some reason) with 123Guestbook.com.";
    }
    else {
        textElement6.innerHTML = "05/Julio/2023: Reemplazé el Guestbook original de Firebase (RIP por alguna razón) por 123Guestbook.com.";
    }

    if (textElement7.innerHTML === "Nombre:") {
      textElement7.innerHTML = "Name:";
    }
    else {
        textElement7.innerHTML = "Nombre:";
    }

    if (textElement8.innerHTML === "Actualmente:") {
      textElement8.innerHTML = "Currently:";
    }
    else {
        textElement8.innerHTML = "Actualmente:";
    }

    if (textElement9.innerHTML === "Programando... Estudiando... Haciendo musica y glitches... :)") {
      textElement9.innerHTML = "Programming... Studying... Making music and glitches... :)";
    }
    else {
        textElement9.innerHTML = "Programando... Estudiando... Haciendo musica y glitches... :)";
    }

    if (textElement10.innerHTML === "Jugando:") {
      textElement10.innerHTML = "Playing:";
    }
    else {
        textElement10.innerHTML = "Jugando:";
    }

    // Spanish version of the text
    var spanishText = 'Eres el visitante número: <a href="http://stuff.mit.edu/doc/counter-howto.html"><img src="http://stuff.mit.edu/cgi/counter/zombot" alt="several"></a><br>desde que el contador se reinició. (21 de abril, 2023)';

    // English version of the text
    var englishText = 'You are visitor number: <a href="http://stuff.mit.edu/doc/counter-howto.html"><img src="http://stuff.mit.edu/cgi/counter/zombot" alt="several"></a><br>since the counter reset. (April 21, 2023)';

    // If the current text is in English, change it to Spanish
    if (textElement11.innerHTML === englishText) {
      textElement11.innerHTML = spanishText;
    }
    // Otherwise, change it to English
    else {
      textElement11.innerHTML = englishText;
    }

    if (textElement12.innerHTML === "Sitio hecho con ♥️ y Tailwind CSS") {
      textElement12.innerHTML = "Website made with ♥️ and Tailwind CSS";
    }
    else {
        textElement12.innerHTML = "Sitio hecho con ♥️ y Tailwind CSS";
    }
  });
});

