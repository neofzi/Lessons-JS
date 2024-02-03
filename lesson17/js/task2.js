//!Задача №2
// Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
class ServiceCar {
  static Car;
  constructor(driver, brand, number) {
    if (ServiceCar.Car) return ServiceCar.Car;
    this.driver = driver;
    this.brand = brand;
    this.number = number;
    ServiceCar.Car = this;
  }
  toString() {
    return `${this.driver} - ${this.brand} - ${this.number}`;
  }
}
let companyCar = new ServiceCar("Roman", "Porshe", "AT7777TA");
document.write(companyCar.toString());

let companyCar2 = new ServiceCar("Stepan", "Audi", 3234);
document.write(companyCar2.toString());
