//!Задача №6
// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
let elements = [-8, 33, 12, -3, 77];
elements.forEach((element, index, elements) => {
  if (element > elements[0]) {
    elements[index] *= 2;
    document.write(`${elements[index]} <br>`);
  }
});
