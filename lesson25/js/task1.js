//!Задача №1
// Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
class PhoneNumber {
  constructor(number) {
    this.number = number;
  }
  [Symbol.toPrimitive](hint) {
    let result;
    switch (hint) {
      case "number":
        result = this.number;
        break;
      case "string":
        result = `${this.number} - ${this.getOperator()}`;
        break;
    }
    return result;
  }
  getOperator() {
    const operatorCodes = [
      { codes: ["050", "066", "095", "099"], name: "Vodafone Україна" },
      { codes: ["067", "068", "096", "097", "098"], name: "Київстар" },
      { codes: ["063", "073", "093"], name: "Lifecell" },
    ];
    const prefix = this.number.trim().substring(0, 3);
    const operator = operatorCodes.find((operator) =>
      operator.codes.includes(prefix)
    );
    if (operator) return operator.name;
    else throw new OperatorIsNotDefined();
  }
}
class OperatorIsNotDefined extends Error {
  constructor() {
    super();
    this.message = "Оператор не існує";
    this.name = "OperatorIsNotDefined";
  }
}

const phone = new PhoneNumber("0979428248");
try {
  console.log(String(phone));
} catch (error) {
  alert(error.message);
}
