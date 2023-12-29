//!Задача №8
// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
let numbersWithCar = ["AA7777AA", "AT1212TA", "BC8787AM"];
let numbersWithCarFirstA = [];
numbersWithCar.forEach((element) => {
  if (element[0] === "A") {
    numbersWithCarFirstA.push(element);
  }
});
document.write(`${numbersWithCarFirstA}`);
