//!Задача №7
// Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
let prices = [39, 300, 1249, 14499];
prices.forEach((element, index, prices) => {
  if (element >= 1000) {
    prices[index] *= 0.7;
    document.write(`${prices[index]} <br>`);
  }
});
