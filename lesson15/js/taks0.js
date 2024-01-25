//!Задача №0
// Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
class Arr1 {
  constructor(numbers) {
    this.numbers = numbers;
  }
  getСalculatingTheSum() {
    let sum = 0;
    this.numbers.forEach((el) => {
      sum += el;
    });
    return sum;
  }
  getProductCalculation() {
    let sum = 1;
    this.numbers.forEach((element) => {
      sum *= element;
    });
    return sum;
  }
}

let arrNumbers = new Arr1([3, 8, 12, 33, 7, 14]);

let sumFromArr = arrNumbers.getСalculatingTheSum.call(arrNumbers);
document.write(sumFromArr + "<br>");
let productFromArr = arrNumbers.getProductCalculation.apply(arrNumbers);
document.write(productFromArr);
