//!Задача №4
// На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.
class ClickCounter {
  constructor() {
    this.buttonCount = 0;
    this.inputCount = 0;
  }
  handleClick(event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      this.buttonCount++;
      target.innerText = this.buttonCount;
    } else if (target.tagName === "INPUT") {
      this.inputCount++;
      target.placeholder = this.inputCount;
    }
  }
  render(containerSelector) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = this.buttonCount;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = this.inputCount;

    const container = document.querySelector(containerSelector);
    container.addEventListener("click", (event) => {
      this.handleClick(event);
    });

    container.append(btn, input);
  }
}
window.onload = function () {
  let click = new ClickCounter();
  click.render(".click-box");
};
