document.addEventListener('DOMContentLoaded', (event) => {

    // Comprueba si el modo oscuro estaba habilitado en la última visita del usuario.
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

    // Agrega un evento de clic al botón de modo oscuro.
    document.getElementById('darkModeToggle').addEventListener('click', function() {

        // Si el modo oscuro está habilitado, desactívalo. Si no, actívalo.
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        }
    });
});

