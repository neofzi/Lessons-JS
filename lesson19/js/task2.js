//!Задача №2
// Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
class Inputs {
  constructor(count) {
    this.count = count;
  }
  changeNum(element) {
    let getElem = element.target;
    let value = parseInt(getElem.value);
    while (getElem.nextElementSibling) {
      value += 1;
      getElem.nextElementSibling.value = value;
      getElem = getElem.nextElementSibling;
    }
    while (getElem.previousElementSibling) {
      value -= 1;
      getElem.previousElementSibling.value = value;
      getElem = getElem.previousElementSibling;
    }
  }
  render() {
    for (let l = 1; l <= this.count; l++) {
      const input = document.createElement("input");
      input.setAttribute("type", "number");
      input.oninput = this.changeNum.bind(this);
      document.body.append(input);
    }
  }
}
window.onload = function () {
  let i1 = new Inputs(5);
  i1.render();
};
