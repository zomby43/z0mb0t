// Asegúrate de que este script se ejecute después de que todos los recursos de la página se hayan cargado
window.onload = function() {
    if (!window.Webamp.browserIsSupported()) {
        alert("Webamp is not supported in this browser.");
        return;
    }

    // All configuration options are optional.
    const webamp = new Webamp({
        initialTracks: [{
            metaData: {
                artist: "Yabujin",
                title: "302 ionwan2go",
            },
            // Asegúrate de que tu archivo de audio esté servido desde el mismo dominio que tu archivo HTML,
            // o que esté servido con encabezados CORS permisivos.
            url: "/src/music/Yabujin 302ionwan2go.mp3"
        }],
        initialSkin: {
            // Asegúrate de que tu archivo de skin esté servido desde el mismo dominio que tu archivo HTML,
            // o que esté servido con encabezados CORS permisivos.
            url: "/src/winamp/Windows98.wsz"
        },
        // ... otras opciones de configuración si las necesitas
    });

    // Renderiza Webamp cuando esté listo.
    webamp.renderWhenReady(document.getElementById('winamp-container'));
}; // Asegúrate de que este paréntesis cierre la función onload

