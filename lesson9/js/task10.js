//!Задача №10
// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
let prices = [1999, 777, 333, 1212, 398];
let sumTax = [];
prices.forEach((element) => {
  let tax = element * 0.2;
  sumTax.push(tax.toFixed(2));
});
document.write(`${sumTax}`);
