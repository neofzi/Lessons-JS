//!Задача №3
// Дано масив цін на товари. Знайдіть середню вартість товарів і створіть масив, в якому будуть тільки ті ціни, які нижче середньої вартості.
let prices = [120, 230, 150, 80, 200];
// Реалізація завдання тут
let sum = 0;
let belowAverage = [];
prices.forEach((element) => {
  sum += element;
});
let average = sum / prices.length;
prices.forEach((element) => {
  if (element < average) belowAverage.push(element);
});
document.write(`${belowAverage}`);
