//!Задача №3
// Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.
class randomList {
  constructor(count) {
    this.count = count;
  }
  getRandNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  render() {
    for (let i = 0; i < this.count; i++) {
      let list = document.createElement("ol");
      let randNum = this.getRandNum(1, 10);
      for (let j = 0; j < randNum; j++) {
        let item = document.createElement("li");
        item.innerText = this.getRandNum(1, 100);
        list.append(item);
      }
      document.body.append(list);
    }
    let button = document.createElement("button");
    button.innerText = "Показати парні і не парні числа";
    button.onclick = this.changeColor.bind(this);
    document.body.append(button);
  }
  changeColor() {
    const li = document.querySelectorAll("li");
    li.forEach((item) => {
      let itemContent = item.innerText;
      if (itemContent % 2 == 0) item.style.color = "green";
      else item.style.color = "red";
    });
  }
}
window.onload = function () {
  let list = new randomList(5);
  list.render();
};
