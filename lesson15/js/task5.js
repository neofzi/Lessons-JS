//!Задача №5
// Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат

// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
class DanceLeader {
  constructor(maleNames, femaleNames) {
    this.maleNames = maleNames;
    this.femaleNames = femaleNames;
  }
  randomBoy() {
    let randomIndex = Math.floor(Math.random() * this.maleNames.length);
    return this.maleNames[randomIndex];
  }
  randomGirl() {
    let randomIndex = Math.floor(Math.random() * this.femaleNames.length);
    return this.femaleNames[randomIndex];
  }
  coupleForDancing() {
    document.write(`Пара ${this.randomBoy()} та ${this.randomGirl()} <br>`);
  }
  run() {
    setInterval(() => {
      this.coupleForDancing();
    }, 5000);
  }
}
let danceStudent = new DanceLeader(
  ["John", "Michael", "Christopher", "Daniel", "Matthew"],
  ["Emily", "Jessica", "Amanda", "Sarah", "Ashley"]
);
document.write(danceStudent.randomBoy() + "<br>");
document.write(danceStudent.randomGirl() + "<br>");
danceStudent.coupleForDancing();
danceStudent.run();
