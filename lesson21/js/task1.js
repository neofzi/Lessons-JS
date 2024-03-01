//!Задача №1
// Створити клас Client
// Властивості
// ID
// ПІБ
// Кількість грошей на рахунку
// Методи
// Додавання грошей
// Зняття грошей
// ToString

// На основі цього класу створити клас GoldenClient
// Властивості
// ID
// ПІБ
// Кількість грошей на рахунку
// Ліміт кредитних коштів
// Відсоток за використання кредитних коштів
// Методи
// Додавання грошей
// Зняття грошей
// Визначення пені за використання кредитних коштів
// ToString

class Client {
  constructor({ id, userName, totalBalance }) {
    this.id = id;
    this.userName = userName;
    this.totalBalance = totalBalance;
  }
  addMoney() {
    let userValue = parseFloat(document.querySelector(".input").value);
    if (userValue) {
      this.totalBalance += userValue;
      this.balace.innerText = `Баланс - ${this.totalBalance}`;
      document.querySelector("input").value = "";
    }
  }
  withdrawalOfMoney() {
    let userValue = parseFloat(document.querySelector(".input").value);
    if (userValue && this.totalBalance > userValue) {
      this.totalBalance -= userValue;
      this.balace.innerText = `Баланс - ${this.totalBalance}`;
      document.querySelector("input").value = "";
    }
  }
  render(container) {
    this.box = document.createElement("div");

    const id = document.createElement("div");
    id.innerText = `id - ${this.id}`;

    const userName = document.createElement("div");
    userName.innerText = `ПІБ - ${this.userName}`;

    this.balace = document.createElement("div");
    this.balace.innerText = `Баланс - ${this.totalBalance}`;

    const input = document.createElement("input");
    input.placeholder = "Введіть число";
    input.className = "input";
    input.type = "number";

    this.addButton = document.createElement("button");
    this.addButton.innerText = "Додати";
    this.addButton.type = "button";
    this.addButton.addEventListener("click", this.addMoney.bind(this));

    this.subtractionButton = document.createElement("button");
    this.subtractionButton.innerText = "Відняти";
    this.subtractionButton.type = "button";
    this.subtractionButton.addEventListener(
      "click",
      this.withdrawalOfMoney.bind(this)
    );

    this.creditBtn = document.createElement("button");
    this.creditBtn.innerText = "Взяти кредит";
    this.creditBtn.type = "button";
    this.creditBtn.addEventListener("click", this.userCredit.bind(this));

    this.box.append(
      id,
      userName,
      this.balace,
      input,
      this.addButton,
      this.subtractionButton,
      this.creditBtn
    );
    if (container) document.querySelector(container).append(this.box);
  }
}
class GoldenClient extends Client {
  constructor({ id, userName, totalBalance, loanPercentage }) {
    super({ id, userName, totalBalance });
    this.loanPercentage = loanPercentage;
  }
  userCredit() {
    let userValue = parseFloat(document.querySelector(".input").value);
    if (userValue && this.totalBalance > 1000) {
      const isGoldenClient = this instanceof GoldenClient;
      if (isGoldenClient && !confirm("Ви є Golden Client банку?")) return;
      this.totalBalance += userValue;
      this.balace.innerText = `Баланс - ${this.totalBalance}`;
      document.querySelector("input").value = "";

      const payment = userValue * this.loanPercentage;
      const intervalId = setInterval(() => {
        userValue -= payment;
        this.totalBalance -= payment;
        this.balace.innerText = `Баланс - ${this.totalBalance}`;
        if (userValue <= 0) clearInterval(intervalId);
      }, 1000);
    }
  }
}
const client = {
  id: 777,
  userName: "Чр Роман Яр",
  totalBalance: 1000,
  loanPercentage: 0.05,
};
window.onload = function () {
  let goldenCl = new GoldenClient(client);
  goldenCl.render(".box");
};
