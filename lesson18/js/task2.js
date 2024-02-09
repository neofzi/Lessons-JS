//!Задача №2
// Зробити конвертер валют (курси валют – константи у скрипті)
const rateInEuro = 40.39;
const rateInDollar = 37.65;

function currencyConverter() {
  const grnSum = parseFloat(document.getElementById("grnSum").value);
  let dollarField = document.getElementById("dollarSum");
  let euroField = document.getElementById("euroSum");
  const dollarSum = grnSum / rateInDollar;
  const euroSum = grnSum / rateInEuro;
  dollarField.value = dollarSum.toFixed(2);
  euroField.value = euroSum.toFixed(2);
}

window.onload = function () {
  const res = document.querySelector(".lesson-2__button");
  res.onclick = currencyConverter;
};
