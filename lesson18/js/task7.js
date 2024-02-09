//!Задача №7
// Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.
function travel() {
  let transportPrice = document.querySelectorAll(".transport");
  let meals = document.querySelectorAll(".checkbox");
  let guidePrice = document.querySelectorAll(".guide");
  let sum = 0;
  for (const item of transportPrice) {
    sum += parseFloat(item.value);
  }
  for (const item of meals) {
    if (item.checked) sum += parseFloat(item.value);
  }
  for (const item of guidePrice) {
    if (item.checked) sum += parseFloat(item.value);
  }
  const totalCost = document.querySelector("#totalCost");
  totalCost.innerHTML = `Total cost ${sum}$`;
}
window.onload = function () {
  document.getElementById("button").onclick = travel;
};
