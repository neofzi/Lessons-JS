//!Задача №2
// Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану.
class Tank {
  constructor(count) {
    this.srcImg =
      "https://www.pngall.com/wp-content/uploads/8/Military-Tank-PNG.png";
    this.count = count;
  }
  getRandomPosition(min = 0, max = 100) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  changePosition(tankElement, minTop, maxTop) {
    let position = minTop;
    let interval = setInterval(() => {
      position += 0.5;
      tankElement.style.top = position + "%";
      if (position >= maxTop) {
        clearInterval(interval);
        this.changePosition(tankElement, minTop, maxTop);
      }
    }, 100);
  }
  destroyingATank(event) {
    const tankElement = event.target;
    const fire = document.createElement("div");
    fire.innerText = "🔥";
    fire.style.position = "absolute";
    fire.style.left = tankElement.style.left;
    fire.style.top = tankElement.style.top;
    fire.style.fontSize = "30px";
    document.body.appendChild(fire);
    tankElement.remove();
  }
  render(containerSelector) {
    for (let i = 0; i < this.count; i++) {
      const tank = document.createElement("img");
      tank.style.left = this.getRandomPosition() + "%";
      tank.style.top = "-10%";
      tank.setAttribute("src", this.srcImg);
      tank.addEventListener("click", this.destroyingATank);
      if (containerSelector)
        document.querySelector(containerSelector).append(tank);
      this.changePosition(tank, -10, 100);
    }
  }
}
window.onload = function () {
  let tank = new Tank(3);
  tank.render(".tanks");
};
