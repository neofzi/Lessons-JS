//!Задача №3
// Розробити Класи
// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (збільшення або зменшення масштабу (об’єкт не рухається)

// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (випадкове зміщення по горизонталі (зміна координати Х))

// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)
class ParentElement {
  constructor(imgSrc, coordinateX, coordinateY, interval) {
    this.imgSrc = imgSrc;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.interval = interval;
  }
  getRandNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  getRandScale(min, max) {
    return min + Math.random() * (max - min + 1);
  }
  render(container) {
    this.img = document.createElement("img");
    this.img.setAttribute("src", this.imgSrc);
    this.img.style.top = this.coordinateY + "%";
    this.img.style.left = this.coordinateX + "%";
    this.img.style.height = "100px";

    if (container) document.querySelector(container).append(this.img);
  }
}
class House extends ParentElement {
  constructor(imgSrc, coordinateX, coordinateY, interval) {
    super(imgSrc, coordinateX, coordinateY, interval);
  }
  increase() {
    setInterval(() => {
      this.img.style.transform = `Scale(${this.getRandScale(0.5, 1.5)})`;
      this.img.style.transition = "transform 0.3s";
    }, this.interval);
  }
}
class Dog extends ParentElement {
  constructor(imgSrc, coordinateX, coordinateY, interval) {
    super(imgSrc, coordinateX, coordinateY, interval);
  }
  changeCoordinateX() {
    setInterval(() => {
      this.img.style.left = this.getRandNum(0, 50) + "%";
    }, this.interval);
  }
}
class Bird extends ParentElement {
  constructor(imgSrc, coordinateX, coordinateY, interval) {
    super(imgSrc, coordinateX, coordinateY, interval);
  }
  changePosition() {
    setInterval(() => {
      this.img.style.left = this.getRandNum(0, 90) + "%";
      this.img.style.top = this.getRandNum(0, 90) + "%";
    }, this.interval);
  }
}

window.onload = function () {
  let house = new House("img/house.png", 10, 10, 1000);
  house.render(".box");
  house.increase();
  let dog = new Dog("img/dog.png", 20, 20, 1000);
  dog.render(".box");
  dog.changeCoordinateX();
  let bird = new Bird("img/bird.png", 10, 30, 1000);
  bird.render(".box");
  bird.changePosition();
};
