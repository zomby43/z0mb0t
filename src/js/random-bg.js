function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImage() {
  const images = [
    "./src/img/backg/1.png",
    "./src/img/backg/2.png",
    "./src/img/backg/3.png",
    "./src/img/backg/4.gif",
    "./src/img/backg/5.png",
    "./src/img/backg/6.png",
    "./src/img/backg/7.png",
    "./src/img/backg/8.png",
    "./src/img/backg/9.png",
    "./src/img/backg/10.png",
    "./src/img/backg/11.png",
    "./src/img/backg/12.png",
    "./src/img/backg/13.png",
    "./src/img/backg/14.png",
    "./src/img/backg/15.png",
    "./src/img/backg/16.png",
    "./src/img/backg/17.png",
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
