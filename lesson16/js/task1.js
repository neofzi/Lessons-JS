//!Задача №1
// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.
class TDate {
  #year;
  #month;
  #day;
  constructor(initYear, initMonth, initDay) {
    this.Year = initYear;
    this.Month = initMonth;
    this.Day = initDay;
  }
  get Year() {
    return this.#year;
  }
  set Year(newYear) {
    if (newYear <= 0) throw new Error("Incorrect value");
    this.#year = newYear;
  }
  get Month() {
    return this.#month;
  }
  set Month(newMonth) {
    if (newMonth <= 0) throw new Error("Incorrect value");
    this.#month = newMonth;
  }
  get Day() {
    return this.#day;
  }
  set Day(newDay) {
    if (newDay <= 0) throw new Error("Incorrect value");
    this.#day = newDay;
  }
  increaseYears(addYear) {
    this.Year += addYear;
  }
  decreaseYears(reduceYear) {
    this.Year -= reduceYear;
  }
  increaseMonths(addMonth) {
    let totalMonths = this.Month + addMonth;
    this.Year += Math.floor(totalMonths / 12);
    this.Month = totalMonths % 12 || 12;
  }
  decreaseMonths(reduceMonth) {
    let totalMonths = this.Year * 12 + this.Month;
    let newTotalMonths = totalMonths - reduceMonth;
    this.Year = Math.floor(newTotalMonths / 12);
    this.Month = newTotalMonths % 12;
  }
  addDay(addDay) {
    let totalDay = this.Day + addDay;
    this.Year += Math.floor(totalDay / 365);
    this.Month += Math.floor(totalDay / 31);
    this.Day = totalDay % 31 || 31;
  }
  reduceDay(reduceDay) {
    let totalDays =
      this.Year * 365 + (this.Month - 1) * 31 + this.Day - reduceDay;
    this.Year = Math.floor(totalDays / 365);
    this.Month = Math.floor((totalDays % 365) / 31) + 1;
    this.Day = (totalDays % 365) % 31 || 31;
  }
  toString() {
    return `Year: ${this.Year}, Month: ${this.Month}, Day: ${this.Day}`;
  }
}

let currentDate = new TDate(2024, 1, 28);

// -----Роки------
currentDate.increaseYears(3);
console.log(currentDate.toString());
currentDate.decreaseYears(20);
console.log(currentDate.toString());

// -----Місяці------
currentDate.increaseMonths(15);
console.log(currentDate.toString());
currentDate.decreaseMonths(29);
console.log(currentDate.toString());

// -----Дні------
currentDate.addDay(20);
console.log(currentDate.toString());
currentDate.reduceDay(11);
console.log(currentDate.toString());

alert(currentDate.toString());
