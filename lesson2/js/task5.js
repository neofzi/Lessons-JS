//! Задача №5
// Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
{
  let quantitySecond = parseFloat(prompt("Введіть кількість секунд"));

  const MINUTE = 60,
    HOUR = 3600;

  let sumMinute = quantitySecond / MINUTE;
  let sumHour = quantitySecond / HOUR;

  document.write(`Кількість хвилин = ${sumMinute.toFixed(1)}хв <br>`);
  document.write(`Кількість годин = ${sumHour.toFixed(1)}год`);
}
