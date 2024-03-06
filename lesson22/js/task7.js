//!Задача №7
// Користувач бере авто на вказану кількість годин. Визначити кінцевий час повернення.
let userValue = document.querySelector(".input");
userValue.addEventListener("input", carReturn);
function carReturn() {
  let result = document.querySelector(".result");
  let userHourValue = parseInt(userValue.value);
  let date = new Date();
  date.setHours(date.getHours() + userHourValue);
  console.log(date);
  result.innerText = date.toLocaleString();
}
