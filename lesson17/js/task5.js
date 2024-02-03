//!Задача №5
// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.
class History {
  static instance;
  examples = [];
  constructor() {
    if (History.instance) return History.instance;
    History.instance = this;
  }
  addExample(exapmple) {
    this.examples.push(exapmple);
  }
}
class MultChecker {
  constructor(min, max) {
    this.firstNum = this.getRandNum(min, max);
    this.secondNum = this.getRandNum(min, max);
  }
  getRandNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  get correctAnswer() {
    return this.firstNum * this.secondNum;
  }
  get exapmle() {
    return `${this.firstNum} * ${this.secondNum}`;
  }
  toString() {
    return `${this.firstNum} * ${this.secondNum}`;
  }
}
class AddChecker {
  constructor(min, max) {
    this.firstNum = this.getRandNum(min, max);
    this.secondNum = this.getRandNum(min, max);
  }
  getRandNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  get correctAnswer() {
    return this.firstNum + this.secondNum;
  }
  get exapmle() {
    return `${this.firstNum} + ${this.secondNum}`;
  }
  toString() {
    return `${this.firstNum} + ${this.secondNum}`;
  }
}
class TestData {
  constructor() {
    this.mult = new MultChecker(1, 4);
    this.add = new AddChecker(1, 4);
    this.userAnswer = null;
  }
  userMultQuestion() {
    this.userAnswer = parseInt(prompt(`${this.mult.exapmle}`));
    if (this.userAnswer === this.mult.correctAnswer) alert("Правильно");
    else alert("Не правильно");
  }
  userAddQuestion() {
    this.userAnswer = parseInt(prompt(`${this.add.exapmle}`));
    if (this.userAnswer === this.add.correctAnswer) alert("Правильно");
    else alert("Не правильно");
  }
}
class TestManager {
  constructor(timer) {
    this.history = new History();
    this.timer = timer;
  }
  getRandNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  runTest(count) {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < count) {
        const testData = new TestData();
        let randNum = this.getRandNum(0, 1);
        if (randNum === 0) testData.userMultQuestion();
        else testData.userAddQuestion();
        this.history.addExample({
          firstNum:
            randNum === 0 ? testData.mult.firstNum : testData.add.firstNum,
          secondNum:
            randNum === 0 ? testData.mult.secondNum : testData.add.secondNum,
          operation: randNum === 0 ? "*" : "+",
          userAnswer: testData.userAnswer,
          correctAnswer:
            randNum === 0
              ? testData.mult.correctAnswer
              : testData.add.correctAnswer,
        });
        i++;
      } else {
        clearInterval(intervalId); // Зупиняємо інтервал після завершення тестів
        console.log(this.history.examples); // Виводимо історію в консоль
      }
    }, this.timer);
  }
}

let testMenager = new TestManager(1000);
testMenager.runTest(10);
