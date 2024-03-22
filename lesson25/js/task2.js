//!Задача №2
// Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Shop {
  constructor(products) {
    this.products = products;
  }

  *[Symbol.iterator]() {
    for (const product of this.products) {
      const totalCost = product.price * product.quantity;
      yield `${product.name} - ${totalCost} UAN`;
    }
  }
}

const products = [
  new Product("Айфон 15 про макс", 51899, 10),
  new Product("Кавоварка", 25331, 8),
  new Product("Роутер ", 5000, 13),
];

const shop = new Shop(products);

for (const item of shop) {
  console.log(item);
}
