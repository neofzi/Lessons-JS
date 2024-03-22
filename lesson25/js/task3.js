//!Задача №3
// Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
function* generateEvenNumbers(count, minRandNum, maxRandNum) {
  let generatedCount = 0;
  while (generatedCount < count) {
    let randomNumber =
      minRandNum + Math.floor(Math.random() * (maxRandNum - minRandNum + 1));
    if (randomNumber % 2 === 0) {
      yield randomNumber;
      generatedCount++;
    }
  }
}

const evenNumbersGenerator = generateEvenNumbers(10, 1, 100);

for (const number of evenNumbersGenerator) {
  console.log(number);
}
