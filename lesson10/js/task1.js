//!Урок 10
//!Задача №1
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
function getQuantityOfPrices(userNum, minNum, maxNum) {
  let prices = [];
  for (let i = 1; i <= userNum; i++) {
    const RANDOM_NUMBER = minNum + Math.floor(Math.random() * maxNum);
    prices.push(RANDOM_NUMBER);
  }
  return prices;
}
let userNum = parseInt(prompt("Введіть кількість цін"));
let prices = getQuantityOfPrices(userNum, 1, 10000);

//1. Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
let arr1 = prices.filter((el) => el > 1000);
document.write(`${arr1} <br>`);

//2. Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
let arr2 = prices.reduce((result, el, index) => {
  if (el > 1000) result.push(index + 1);
  return result;
}, []);
document.write(`${arr2} <br>`);

//3. Сформувати список з тих цін, які більші за попереднє значення
let arr3 = prices.filter(
  (el, index, price) => index > 0 && el > price[index - 1]
);
document.write(`${arr3} <br>`);

//4. Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
let maxNum = Math.max(...prices);
let arr4 = prices.map((price) => (price * 100) / maxNum);
let newPricesForPrint = arr4.map((el) => el.toFixed(0) + "%");
document.write(`${newPricesForPrint} <br>`);

//5. Підрахувати кількість змін цін
let arr5 = prices.reduce((count, el, index, arr) => {
  if (index > 0 && el !== arr[index - 1]) return count + 1;
  return count;
}, 1);
document.write(`${arr5} <br>`);

//6. Визначити, чи є ціна, що менше 1000
if (prices.some((less) => less < 1000)) document.write("Yes <br>");
else document.write("No <br>");

//7. Визначати, чи усі ціни більше за 1000
if (prices.every((price) => price > 1000)) document.write("Yes <br>");
else document.write("No <br>");

//8. Підрахувати кількість цін, що більше за 1000
let arr8 = prices.reduce((count, el) => {
  if (el > 1000) return count + 1;
  return count;
}, 0);
document.write(`${arr8} <br>`);

//9. Підрахувати суму цін, що більше за 1000
let arr9 = prices.reduce((result, el) => {
  if (el > 1000) result += el;
  return result;
}, 0);
document.write(`${arr9} <br>`);

//10. Знайти першу ціну, що більше за 1000
let arr10 = prices.find((el) => el > 1000);
document.write(`${arr10} <br>`);

//11. Знайти індекс першої ціни, що більше за 1000
let arr11 = prices.findIndex((el) => el > 1000);
document.write(`${arr11} <br>`);

//12. Знайти останню ціну, що більше за 1000
let arr12 = prices.findLast((el) => el > 1000);
document.write(`${arr12} <br>`);

//13. Знайти індекс останньої ціни, що більше за 1000
let arr13 = prices.findLastIndex((el) => el > 1000);
document.write(`${arr13} <br>`);
