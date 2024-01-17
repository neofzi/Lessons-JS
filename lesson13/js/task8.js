//!Задача №8
// Створіть функцію visitorCounter, яка буде приймати початкове значення лічильника та повертати об'єкт з двома методами
function getVisitorCounter(start) {
  let count = start;
  function getQuantity() {
    return count++;
  }
  return getQuantity;
}
const NEXT_VISITORS = getVisitorCounter(1);
for (let i = 0; i < 3; i++) {
  document.write(`${NEXT_VISITORS()} <br>`);
}
