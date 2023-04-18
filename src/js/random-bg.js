  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomImage() {
    const images = [
      "../src/img/backg/1.png",
      "../src/img/backg/2.png",
      "../src/img/backg/3.png",
      "../src/img/backg/4.gif",
      "../src/img/backg/5.png",
      "../src/img/backg/6.gif",
      "../src/img/backg/7.png",
    ];
    return images[getRandomInt(0, images.length - 1)];
  }

  document.addEventListener("DOMContentLoaded", function () {
    const bgElement = document.querySelector(".random-bg");
    const imageUrl = `url('${getRandomImage()}')`;
    bgElement.style.backgroundImage = imageUrl;
  });
