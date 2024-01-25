//!Задача №2
// Створити об’єкт «Авто».
// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів

// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів
class Car {
  constructor(brand, tankSize, fuelQuantity, seats, passengers) {
    this.brand = brand;
    this.tankSize = tankSize;
    this.fuelQuantity = fuelQuantity;
    this.seats = seats;
    this.passengers = passengers;
  }
  getRefill() {
    let lackOf = this.tankSize - this.fuelQuantity;
    return lackOf;
  }
  numberOfPassengers() {
    console.log(this.passengers);
  }
  addPassengers() {
    let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
    this.passengers += randomNumber;
    return this.passengers;
  }
  removingMassagers() {
    let randomNumber = Math.min(
      Math.floor(Math.random() * (this.passengers - 1) + 1),
      this.passengers
    );
    this.passengers -= randomNumber;
    return this.passengers;
  }
}

const myCar = new Car("Toyota", 50, 25, 5, 2);
console.log(myCar.getRefill());
myCar.numberOfPassengers();
console.log(myCar.addPassengers());
console.log(myCar.removingMassagers());
