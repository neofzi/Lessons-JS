//!Задача №4
// Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.
class CorrectionOfAssessment {
  render(container) {
    const box = document.createElement("div");

    this.month = document.createElement("input");
    this.month.type = "number";
    this.month.placeholder = "Введіть місяць навчання";

    this.rating = document.createElement("input");
    this.rating.type = "number";
    this.rating.placeholder = "Введіть свою оцінку";

    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "Перевірити";
    button.onclick = this.validate.bind(this);

    box.append(this.month, this.rating, button);
    if (container) document.querySelector(container).append(box);
  }
  validate() {
    try {
      if (this.month.value === "" || this.rating.value === "")
        throw new NotFillError();
      if (isNaN(this.rating.value) && isNaN(this.rating.value))
        throw new IsNotNumberError();
      if (this.month.value > 12 || this.rating.value > 12)
        throw new ToHightNumberError();
      if (this.month.value < 1 || this.rating.value < 1)
        throw new NegativeNumberError();
      if (this.month.value <= 8 && this.month.value >= 6)
        throw new HollidayError();
      else alert("Оцінку можна виправити");
    } catch (error) {
      alert(error.message);
    }
  }
}
class IsNotNumberError extends Error {
  constructor() {
    super();
    this.message = "Введіть число від 1 до 12";
    this.name = "IsNotNumberError";
  }
}
class NegativeNumberError extends Error {
  constructor() {
    super();
    this.message = "Число повинно бути в діапазоні від 1 до 12";
    this.name = "IsNotNumberError";
  }
}
class ToHightNumberError extends Error {
  constructor() {
    super();
    this.message = "Число повинно бути до 12";
    this.name = "IsToHightNumberError";
  }
}
class HollidayError extends Error {
  constructor() {
    super();
    this.message = "У цей місяць канікули ";
    this.name = "IsHollidayError";
  }
}
class NotFillError extends Error {
  constructor() {
    super();
    this.message = "Запоніть 2 поля ";
    this.name = "IsNotFillError";
  }
}
window.onload = function () {
  let student = new CorrectionOfAssessment();
  student.render(".box");
};
