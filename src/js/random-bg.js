function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImage() {
  const images = [
    "/z0mb0t/src/img/backg/1.png",
    "/z0mb0t/src/img/backg/2.png",
    "/z0mb0t/src/img/backg/3.png",
    "/z0mb0t/src/img/backg/4.gif",
    "/z0mb0t/src/img/backg/5.png",
    "/z0mb0t/src/img/backg/6.gif",
    "/z0mb0t/src/img/backg/7.png",
    "/z0mb0t/src/img/backg/8.gif",
    "/z0mb0t/src/img/backg/9.png",
    "/z0mb0t/src/img/backg/10.png",
  ];
  return images[getRandomInt(0, images.length - 1)];
}

document.addEventListener("DOMContentLoaded", function () {
  const bgElement = document.querySelector(".random-bg");
  const imageUrl = getRandomImage();
  bgElement.style.backgroundImage = `url('${imageUrl}')`;

  var bgImage = new Image();
  bgImage.src = imageUrl;

  bgImage.onload = function() {
    var keyframes = `
      @keyframes move-bg {
        0%   { background-position: 0 0; }
        100% { background-position: ${this.width}px 0; }
      }
    `;

    var styleElement = document.createElement('style');
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    bgElement.style.animation = 'move-bg 10s linear infinite';
  };
});
