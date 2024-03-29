const form = document.querySelector('.img-upload__form'); // сама форма
const scale = document.querySelector('.img-upload__scale'); // сам филдсет
const zoomMaxButton = scale.querySelector('.scale__control--smaller'); // кнопка уменьшения
const zoomMinButton = scale.querySelector('.scale__control--bigger'); // кнопка увеличения
const scaleValue = form.scale; // инпут в филдсете
const previewImage = document.querySelector('.img-upload__preview img'); // превью картинка
// создаем перечисление шага
const Default = {
  MIN: 25, // минимальное значение
  MAX: 100, // максимальное
  STEP: 25 // значение шага
};
// создаем из строки число
let currentScale = parseInt(scaleValue.value, 10); //значение из инпута запиши в десятичное число
// функция с переписыванием значений
const setScale = (value) => {
  previewImage.style.transform = `scale(${value / 100})`; // трансформируй стили картинки
  form.scale.value = `${value}%`; // запиши значение в инпута пойманное число
  currentScale = value; //в число записываем входящее значение
};
// функция для шага вперед
zoomMaxButton.addEventListener('click', () => {
  if (currentScale <= Default.MIN) { // если пойманное число меньше минимального
    return; // то не давай идти дальше
  }
  // или передай в сетскеил число
  setScale(currentScale - Default.STEP); // из пойманного вычитаем минимальное
});
// функция для шага вперед
zoomMinButton.addEventListener('click', () => {
  if (currentScale >= Default.MAX) { // если пойманное число болше минимального
    return; // то не давай идти дальше
  }
  // или передай в сетскеил число
  setScale(currentScale + Default.STEP); // к пойманного приабавляем максимальное
});
// создаем функцию сброса где удаляем трансформ к картинке
export const resetScale = () => previewImage.style.removeProperty('transform');
