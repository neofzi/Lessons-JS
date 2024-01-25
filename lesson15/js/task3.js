//!Задача №3
// Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей

// Методи
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render
class MultiplicationTableChecker {
  constructor(numberToCheck) {
    this.numberToCheck = numberToCheck;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }
  generateExample() {
    return 1 + Math.floor(Math.random() * 10);
  }
  checkAnswer(userAnswer, secondNumber) {
    let sum = this.numberToCheck * secondNumber;
    if (userAnswer === sum) this.correctAnswers++;
    else this.incorrectAnswers++;
  }
  render() {
    console.log(`Число для перевірки: ${this.numberToCheck}`);
    console.log(`Правильних відповідей: ${this.correctAnswers}`);
    console.log(`Неправильних відповідей: ${this.incorrectAnswers}`);
  }
}

const MULT = new MultiplicationTableChecker(7);
while (confirm("Хочете продовжити?")) {
  const secondNumber = MULT.generateExample();
  let userAnswer = parseInt(
    prompt(`Скільки буде ${MULT.numberToCheck} * ${secondNumber}?`)
  );
  MULT.checkAnswer(userAnswer, secondNumber);
}
MULT.render();
