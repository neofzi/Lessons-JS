//!Задача №2
// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// Вивести усіх простих клієнтів;
// Вивести усіх клієнтів GoldenClient;
// Знайти сумарну кількість грошей на рахунку;
class Bank {
  constructor({ id, name, money }) {
    this.id = id;
    this.name = name;
    this.money = money;
    this.sum = 0;
  }
  render(container) {
    const box = document.createElement("div");
    box.className = "box";

    const id = document.createElement("div");
    id.innerText = `ID - ${this.id}`;

    const name = document.createElement("div");
    name.innerText = `Name - ${this.name}`;

    const money = document.createElement("div");
    money.innerText = `Money - ${this.money}$`;

    box.append(id, name, money);
    if (container) document.querySelector(container).append(box);
  }
  static calculateTotalMoney(clients) {
    const totalMoneyElement = document.querySelector(".sum");
    let totalMoney = 0;
    clients.forEach((client) => {
      totalMoney += client.money;
    });
    totalMoneyElement.innerText = `Загальна сума - ${totalMoney}$`;
  }
}
const clients = [
  {
    id: 777,
    name: "Роман",
    money: 177000,
  },
  {
    id: 666,
    name: "Максим",
    money: 17000,
  },
  {
    id: 131,
    name: "Влад",
    money: 33000,
  },
];
const goldenClients = [
  {
    id: 1,
    name: "Стів Джобс",
    money: 1000000,
  },
  {
    id: 2,
    name: "Марк Цукерберг",
    money: 1000000,
  },
  {
    id: 13,
    name: "Оля",
    money: 9999999,
  },
];

window.onload = function () {
  for (const client of clients) {
    new Bank(client).render(".client-box");
  }
  for (const goldenClient of goldenClients) {
    new Bank(goldenClient).render(".golden-client-box");
  }

  Bank.calculateTotalMoney([...clients, ...goldenClients]);
};
