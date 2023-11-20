//!Задача №16
// Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
let numberOfWeeks = parseInt(prompt("Введіть кількість тижнів"));
let result = 0;
for (let w = 1; w <= numberOfWeeks; w++) {
  for (let day = 1; day <= 5; day++) {
    let money = parseFloat(prompt(`Введіть прибуток за ${day} день`));
    result += money;
    document.write(
      `<h2>Прибуток за ${w} тижня та ${day} день = ${money}грн</h2> <br>`
    );
  }
}
document.write(`<h2>Загальна сума = ${result}</h2>`);
