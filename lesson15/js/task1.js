//!Задача №1
// Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями

// Методи (дії)
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля
class ShootingRange {
  constructor(range) {
    this.field = this.generateField(range);
    this.rabbitPosition = this.generateRabbitPosition();
  }
  generateField(range) {
    return new Array(range).fill(0);
  }
  generateRabbitPosition() {
    return Math.floor(Math.random() * this.field.length);
  }
  userShot() {
    let userShot;
    while (true) {
      userShot = parseInt(
        prompt(`Введіть число для пострілу від 0 до ${this.field.length - 1}`)
      );
      if (userShot === this.rabbitPosition) {
        alert("Ви попали в зайця!");
        break;
      } else {
        alert(
          "Ви не попали(\nЗаєць втік в невідомому напрямку, але ви ще можете в нього попасти"
        );
        let randomDirection = Math.random() < 0.5 ? -1 : 1;
        this.rabbitPosition += randomDirection;
        if (this.rabbitPosition < 0) this.rabbitPosition = 0;
        else if (this.rabbitPosition >= this.field.length)
          this.rabbitPosition = this.field.length - 1;
      }
    }
  }
}

let shootingRange = new ShootingRange(10);
shootingRange.userShot();
