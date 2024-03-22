//!Задача №4
// Використовуючи один з АРІ та функцію fetch організувати завантаження та відображення даних
async function loadBreedImage(breedName) {
  return new Promise((resolve, reject) => {
    fetch(breedName)
      .then((res) => res.json())
      .then((data) => {
        document.querySelector(".img").innerHTML = `<img src="${data.url}">`;
        resolve();
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
}

setInterval(() => {
  loadBreedImage("https://random.dog/woof.json");
}, 5000);
