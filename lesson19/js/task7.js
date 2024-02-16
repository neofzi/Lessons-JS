//!Задача №7
// Відобразити падаючий лазер. Лазер з’являється у верхній частині екрану (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). Як тільки лазер досягає нижньої частини екрану (top>maxTop) віе знову повинна з’явитись у верхній частині екрану (top=0).
class Lazer {
  constructor(count) {
    this.count = count;
  }
  spawnLazer() {
    let widthContainer = window.innerWidth;
    this.randomSpawn = Math.floor(Math.random() * (widthContainer - 0 + 1));
    this.randomSpead = Math.floor(Math.random() * (7 - 4 + 1) + 4);
  }
  renderLazer(containerSelector) {
    for (let i = 0; i < this.count; i++) {
      this.spawnLazer();
      this.lazer = document.createElement("div");
      this.lazer.className = "lazer";
      this.lazer.style.left = this.randomSpawn + "px";
      this.lazer.style.top = 0 + "px";
      this.lazer.style.animationDuration = this.randomSpead + "s";
      if (containerSelector) {
        document.querySelector(containerSelector).append(this.lazer);
      }
    }
  }
}
window.onload = function () {
  let l1 = new Lazer(3);
  l1.renderLazer(".wrapper");
};
