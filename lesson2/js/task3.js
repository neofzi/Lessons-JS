//! Задача №3
// Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
{
  let priceOfProduct = parseFloat(prompt(`Введіть вартість товару`));
  let productQuantiti = parseInt(prompt(`Введіть кількість товару`));

  const TAX = 0.05;

  let totalPrice = priceOfProduct * productQuantiti;
  let taxAmount = totalPrice * TAX;
  let fullPrice = totalPrice + taxAmount;

  document.write(
    `Загальна вартість товару з урахуванням ПДВ = ${fullPrice}грн`
  );
}
