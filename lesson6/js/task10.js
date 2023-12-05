//!Задача №10
// З клавіатури вводиться вартість одиниці товару. Поки користувач не введе суму грошей, яка достатня для купівлі товару або не відмовиться від купівлі давати можливість вводити суму грошей.
let userPayment = 0;
let productAmount = parseFloat(prompt("Введіть всю суму товару"));
do {
  userPayment = parseFloat(prompt("Введіть суму для оплати"));
  if (userPayment === productAmount) {
    alert("Дякуємо за покупку!");
    break;
  } else if (userPayment > productAmount) {
    const CHANGE = userPayment - productAmount;
    alert(`Дякуємо за покупку! \nЗдача: ${CHANGE}грн`);
    break;
  } else {
    const userConfirmed = confirm(
      "У вас недостатньо коштів. Відмовитись від покупки?"
    );
    if (userConfirmed) {
      alert("Ви відмовились від покупки.");
      break;
    }
  }
} while (true);
