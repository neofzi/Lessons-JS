//! Задача №4
// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів
{
  let lengthInCm = parseFloat(prompt("Введіть довжину в сантиметрах"));

  let lengthInMeters = lengthInCm / 100;
  let lengthInKm = lengthInMeters / 100;

  document.write(
    `Кількість сантиметрів = ${lengthInCm}см </br> Кількість метрів = ${lengthInMeters}м </br> Кількість кілометрів = ${lengthInKm}км`
  );
}
