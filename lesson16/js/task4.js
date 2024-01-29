//!Задача №4
// Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
class TBankomat {
  constructor(banknotes) {
    this.banknotes = banknotes;
  }
  getMaxAmount() {
    return this.banknotes.reduce(
      (max, banknote) => (banknote.nominal > max ? banknote.nominal : max),
      0
    );
  }
  getMinAmount() {
    return this.banknotes.reduce(
      (min, banknote) => (banknote.nominal < min ? banknote.nominal : min),
      Infinity
    );
  }
  moneyWithdrawal() {
    let allSum = this.banknotes.reduce(
      (accumulator, currentElement) =>
        accumulator + currentElement.nominal * currentElement.count,
      0
    );
    let userSum = parseFloat(
      prompt(`Яку суму вам потрібно зняти?\nУ банкоматі доступно ${allSum} грн`)
    );
    if (userSum > allSum || userSum < 0)
      throw new Error("Недостатньо коштів, або була вказана некоректна сума");
    else {
      allSum -= userSum;
      return `Гроші успішно знято, у банкоматі залишилось ${allSum}`;
    }
  }
}

const banknotes = [
  { nominal: 5, count: 10 },
  { nominal: 10, count: 20 },
  { nominal: 20, count: 30 },
  { nominal: 50, count: 15 },
  { nominal: 100, count: 25 },
  { nominal: 200, count: 10 },
];

const bankomat = new TBankomat(banknotes);
console.log(bankomat.getMaxAmount());
console.log(bankomat.getMinAmount());
console.log(bankomat.moneyWithdrawal());
