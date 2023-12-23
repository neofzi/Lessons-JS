//!Задача №7
// Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// 1. за весь рік;
// 2. у першій половині року;
// 3. у другій половині року;
// 4. за літо;
// 5. за ІІ квартал;
// 6. за парні місяці (з парними номерами);
// 7. за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
function getPayment() {
  let payment = [];
  for (let i = 0; i < 12; i++) {
    let userPayment = parseFloat(prompt(`Введіть суму за ${i + 1} платіжку`));
    payment.push(userPayment);
  }
  return payment;
}
function getPaymentForYear(payment) {
  let amountPerYear = 0;
  for (let i = 0; i < 12; i++) {
    amountPerYear += payment[i];
  }
  return amountPerYear;
}
function getPaymentHalfYear(payment) {
  let sumPaymentFirstYear = 0;
  let sumPaymentSecondYear = 0;
  for (let i = 0; i < 12; i++) {
    if (i <= 6) sumPaymentFirstYear += payment[i];
    else sumPaymentSecondYear += payment[i];
  }
  return { key1: sumPaymentFirstYear, key2: sumPaymentSecondYear };
}
function getForTheSummer(payment) {
  let sumForTheSummer = 0;
  for (let i = 5; i < 8; i++) {
    sumForTheSummer += payment[i];
  }
  return sumForTheSummer;
}
function getQuarter2(payment) {
  let quarter2 = 0;
  for (let i = 3; i < 6; i++) {
    quarter2 += payment[i];
  }
  return quarter2;
}
function getEvenMonths(payment) {
  let sumEvenMonths = 0;
  for (let i = 0; i < 12; i += 2) {
    sumEvenMonths += payment[i];
  }
  return sumEvenMonths;
}
function getInitialSeason(payment) {
  let sumSeason = 0;
  for (let i = 0; i < 12; i += 3) {
    sumSeason += payment[i];
  }
  return sumSeason;
}

let payment = getPayment();
let paymentForYear = getPaymentForYear(payment);
let paymenHalfYear = getPaymentHalfYear(payment);
let forTheSummer = getForTheSummer(payment);
let quarter2 = getQuarter2(payment);
let evenMonths = getEvenMonths(payment);
let initialSeason = getInitialSeason(payment);
document.write(`Сума за ввесь рік - ${paymentForYear} <br>`);
document.write(
  `Сума у першій половині року - ${paymenHalfYear.key1} <br>Сума у другій половині року - ${paymenHalfYear.key2} <br>`
);
document.write(`Сума за літо - ${forTheSummer} <br>`);
document.write(`Сума за другий квартал - ${quarter2} <br>`);
document.write(`Сума за парні місяці - ${evenMonths} <br>`);
document.write(`Сума за початок сезонів - ${initialSeason} <br>`);
