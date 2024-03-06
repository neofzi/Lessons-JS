//!Задача №9
// Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
const daysInput = document.querySelector(".input-days");
const productionDateInput = document.querySelector(".input-production-date");

daysInput.addEventListener("input", checkExpiry);
productionDateInput.addEventListener("input", checkExpiry);

function checkExpiry() {
  const resultDiv = document.querySelector(".result");

  if (daysInput.value && productionDateInput.value) {
    const daysToAdd = parseInt(daysInput.value);
    const productionDate = new Date(productionDateInput.value);
    productionDate.setDate(productionDate.getDate() + daysToAdd);
    const currentDate = new Date();

    if (currentDate <= productionDate)
      resultDiv.innerText = "Цей продукт ще придатний до споживання.";
    else resultDiv.innerText = "Цей продукт вже не придатний до споживання.";
  }
}
