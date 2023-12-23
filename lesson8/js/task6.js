//!Задача №6
// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
function getProduct(userMoney) {
  let productPrice = [777, 199, 1099, 599, 1313];
  let productName = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
  ];
  for (let i = 0; i < productPrice.length; i++) {
    if (productPrice[i] <= userMoney) {
      document.write(
        `Продукт: ${productName[i]} Ціна: ${productPrice[i]} <br>`
      );
    }
  }
}
let userMoney = parseFloat(prompt("Введіть кількість грошей"));
getProduct(userMoney);
