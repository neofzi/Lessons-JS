//! Задача №6
// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
{
  let firstProduct = parseFloat(prompt("Введіть вартість першого товару"));
  let secondProduct = parseFloat(prompt("Введіть вартість другого товару"));
  let thirdProduct = parseFloat(prompt("Введіть вартість третього товару"));

  let firstQuantity = parseInt(prompt("Введіть кількість першого товару"));
  let secondQuantity = parseInt(prompt("Введіть кількість другого товару"));
  let thirdQuantity = parseInt(prompt("Введіть кількість третього товару"));

  let sum1 = firstProduct * firstQuantity;
  let sum2 = secondProduct * secondQuantity;
  let sum3 = thirdProduct * thirdQuantity;

  document.write(`
  <table >
  <tr>
	 <td><h2>Назва товару</h2></td>
	 <td><h2>Кількість</h2></td>
	 <td><h2>Ціна</h2></td>
	 <td><h2>Загальна ціна товару</h2></td>
	 <td><h2>Загальна вартість всіх товарів</h2></td>
  </tr>
  <tr>
	 <td>Перший продукт</td>
	 <td>${firstQuantity}</td>
	 <td>${firstProduct}</td>
	 <td>${sum1}</td>
	 <td>${sum1 + sum2 + sum3}</td>
  </tr>
  <tr>
	 <td>Другий продукт</td>
	 <td>${secondQuantity}</td>
	 <td>${secondProduct}</td>
	 <td>${sum2}</td>
  </tr>
  <tr>
	 <td>Третій продукт</td>
	 <td>${thirdQuantity}</td>
	 <td>${thirdProduct}</td>
	 <td>${sum3}</td>
  </tr>
  </table>
  `);
}
