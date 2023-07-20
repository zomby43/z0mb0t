document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.image3D-effect').forEach(container => {
        const image = container.querySelector('img');
        let isIdle = true;

        const apply3DEffect = (x, y, boundingBox) => {
            const centerX = boundingBox.width / 2;
            const centerY = boundingBox.height / 2;

            const deltaX = x - centerX;
            const deltaY = y - centerY;

            const percentX = deltaX / centerX;
            const percentY = deltaY / centerY;

            const deg = 10;

            const rotateY = deg * percentX;
            const rotateX = deg * percentY * -1;

            image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const lerp = (start, end, t) => start + t * (end - start);

        const corners = [
            { x: 0, y: 0 },
            { x: container.offsetWidth, y: 0 },
            { x: container.offsetWidth, y: container.offsetHeight },
            { x: 0, y: container.offsetHeight }
        ];
        let currentCorner = 0;
        let t = 0;

        const idleAnimation = () => {
            if (!isIdle) return;

            if (t < 1) {
                t += 0.002;  // Velocidad de transición, ajusta según necesidad
            } else {
                t = 0;
                currentCorner = (currentCorner + 1) % corners.length;
            }

            const nextCorner = (currentCorner + 1) % corners.length;
            const x = lerp(corners[currentCorner].x, corners[nextCorner].x, t);
            const y = lerp(corners[currentCorner].y, corners[nextCorner].y, t);

            apply3DEffect(x, y, container.getBoundingClientRect());

            requestAnimationFrame(idleAnimation);
        };

        container.addEventListener('mousemove', (e) => {
            isIdle = false;
            const boundingBox = e.currentTarget.getBoundingClientRect();
            apply3DEffect(e.pageX - boundingBox.left, e.pageY - boundingBox.top, boundingBox);
        });

        container.addEventListener('mouseleave', () => {
            isIdle = true;
            t = 0; // Resetea la interpolación
            idleAnimation();
        });

        idleAnimation(); // Inicia la animación idle al cargar la página
    });
});
