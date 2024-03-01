//!Задача №1
// Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.
class Star {
  getRandomPosition(min = 0, max = 100) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  changeSize(minScale, maxScale) {
    this.star.style.top = this.getRandomPosition() + "%";
    this.star.style.left = this.getRandomPosition() + "%";
    let currentSize = minScale;
    let interval = setInterval(() => {
      currentSize += 0.1;
      this.star.style.transform = `scale(${currentSize})`;
      if (currentSize >= maxScale) {
        clearInterval(interval);
        currentSize = minScale;
        this.changeSize(minScale, maxScale);
      }
    }, 200);
  }
  render(containerSelector) {
    this.star = document.createElement("div");
    this.star.className = "star";
    this.changeSize(1, 2);
    if (containerSelector)
      document.querySelector(containerSelector).append(this.star);
  }
}
window.onload = function () {
  let star1 = new Star();
  star1.render(".stars");
  let star2 = new Star();
  star2.render(".stars");
  let star3 = new Star();
  star3.render(".stars");
  let star4 = new Star();
  star4.render(".stars");
};
