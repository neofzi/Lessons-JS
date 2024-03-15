//!Задача №7
// Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.
let inp = document.querySelector(".input-color");
let count = document.querySelector(".counter");

function backgroundChange() {
  let colorInputValue = inp.value;
  document.body.style.backgroundColor = colorInputValue;
  localStorage.setItem("bgColor", colorInputValue);

  let countValue = parseInt(count.innerText);
  countValue += 1;
  count.innerText = countValue;
  sessionStorage.setItem("counter", countValue);
}
window.onload = function () {
  inp.oninput = backgroundChange;
  const savedColor = localStorage.getItem("bgColor");
  const saveCounter = sessionStorage.getItem("counter");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    inp.value = savedColor;
  }
  if (saveCounter) count.innerText = saveCounter;
};
