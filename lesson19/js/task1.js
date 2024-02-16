//!Задача №1
// Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
class CreateDivs {
  constructor(count, message) {
    this.count = count;
    this.message = message;
  }
  changeColor() {
    let div = this;
    while (div.nextElementSibling) {
      div = div.nextElementSibling;
      div.style.color = "red";
    }
  }
  render() {
    for (let i = 0; i < this.count; i++) {
      let box = document.createElement("div");
      box.innerText = this.message;
      box.onclick = this.changeColor;
      document.body.prepend(box);
    }
  }
}

window.onload = function () {
  let d1 = new CreateDivs(10, "Hello world!");
  d1.render();
};
