//!Задача №7
// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
function getRandomImage() {
  const RANDOM_IMG = 1 + Math.floor(Math.random() * 4);
  document.write(
    `<img style='height: 150px;' src="./img/img${RANDOM_IMG}.jpg">`
  );
}
getRandomImage();
