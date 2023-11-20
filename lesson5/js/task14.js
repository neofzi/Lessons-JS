//!Задача №14
// Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).
let theWholeAmount = 1 + Math.floor(Math.random() * 10000);
alert(`Вам потрібно сплатити: ${theWholeAmount}грн`);
do {
  let readyToPay = parseFloat(prompt("Введіть суму яку хочете сплатити?"));
  theWholeAmount -= readyToPay;
  if (theWholeAmount < 0) alert(`Здача: ${theWholeAmount}грн`);
  else alert(`Залишилось сплатити: ${theWholeAmount}грн`);
} while (theWholeAmount > 0);
