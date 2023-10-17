document.addEventListener("DOMContentLoaded", function () {
  const popButton = document.querySelector(".pop-button");
  const explosionCount = 10;

  popButton.addEventListener("mouseover", (event) => {
    for (let i = 0; i < explosionCount; i++) {
      setTimeout(() => {
        createExplosion(event.pageX, event.pageY);
      }, i * 50);
    }
  });
  popButton.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default touch behavior (scrolling, zooming, etc.)
    for (let i = 0; i < explosionCount; i++) {
      setTimeout(() => {
        createExplosion(event.touches[0].pageX, event.touches[0].pageY); // use touch coordinates
      }, i * 50);
    }
  });

  function createExplosion(x, y) {
    const explosion = document.createElement("div");
    explosion.classList.add("explosion");
    const size = Math.random() * 40 + 20;
    explosion.style.width = `${size}px`;
    explosion.style.height = `${size}px`;
    explosion.style.left = `${x - size / 2}px`;
    explosion.style.top = `${y - size / 2}px`;

    const color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
      Math.random() * 256
    })`;
    explosion.style.backgroundColor = color;

    document.body.appendChild(explosion);

    setTimeout(() => {
      explosion.remove();
    }, 1000);
  }
});
