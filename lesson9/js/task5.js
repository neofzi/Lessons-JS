//!Задача №5
// Дано масив елементів. Знайти добуток додатних елементів
function getProductOfPositiveElements() {
  let element = [];
  let product = 1;
  for (let i = 0; i < 5; i++) {
    const RANDOM_NUMBER = -100 + Math.floor(Math.random() * (100 - -100 + 1));
    element.push(RANDOM_NUMBER);
  }
  for (const ELEMENT of element) {
    if (ELEMENT > 0) {
      product *= ELEMENT;
    }
  }
  return product;
}
document.write(getProductOfPositiveElements());
