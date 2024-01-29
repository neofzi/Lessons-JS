//!Задача №2
// Обмінник. функції які додають/віднімають і переводять сумму в долари
class TMoney {
  #balance;
  #dollarRate;
  constructor(sumGRNBalance, dollarRate) {
    this.setDollarRate(dollarRate);
    this.Balance = sumGRNBalance;
  }
  get Balance() {
    return this.#balance * this.#dollarRate;
  }
  set Balance(grnSum) {
    if (grnSum < 0) throw new Error("Impossible operation");
    this.#balance = grnSum / this.#dollarRate;
  }
  addMoney(grnSum) {
    if (grnSum < 0) throw new Error("Impossible operation");
    return (this.Balance += grnSum);
  }
  withdrawalOfMoney(grnSum) {
    if (grnSum < 0) throw new Error("Impossible operation");
    return (this.Balance -= grnSum);
  }
  getDollarEquivalent() {
    return this.Balance / this.#dollarRate;
  }
  setDollarRate(rate) {
    if (rate <= 0) throw new Error("Invalid rate");
    this.#dollarRate = rate;
  }
  toString() {
    return `${this.Balance.toFixed(2)}`;
  }
}

let userMoney = parseFloat(prompt("Введіть суму грошей в грн"));
let userRate = parseFloat(prompt("Введіть курс долара"));
let money = new TMoney(userMoney, userRate);
document.write(money + "<br>");

money.addMoney(50);
document.write(`Після додавання грошей: ${money}<br>`);

money.withdrawalOfMoney(30);
document.write(`Після вилучення грошей: ${money}<br>`);

document.write(money.getDollarEquivalent());
