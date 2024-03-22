import { isEscapeKey } from './util.js';
import './modal-big-picture.js';
import { resetValidation, validate } from './hashtags-validate.js';
import { resetScale } from './scale-range.js';
import { resetEffect } from './effects.js';

const body = document.body;

const form = document.querySelector('.img-upload__form'); // сама форма
const filename = form.filename; // инпут формы (красная)
const editingModal = form.querySelector('.img-upload__overlay'); // форма с фильтрами

const closeModal = () => form.reset(); // функция сброса
// функция для поиска наличия хэштэгов и description
const isFocusText = () =>
  [form.hashtags, form.description] // среди них
    .includes(document.activeElement); // найди активный элемент

// закрытие окна эскейпом
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isFocusText) {
    evt.preventDefault();
    closeModal();
  }
};
// фукнция смены классов
const classToggle = () => {
  editingModal.classList.toggle('hidden');
  body.classList.toggle('modal-open');
};
// ловим нажатие на инпут
filename.addEventListener('change', (evt) => {
  evt.preventDefault();
  classToggle(); // меняем классы
  document.addEventListener('keydown', onDocumentKeydown); // прописываем эскейп
});
// ловим нажатие сброса
form.addEventListener('reset', () => {
  classToggle(); // меняем классы
  document.addEventListener('keydown', onDocumentKeydown); // прописываем эскейп
  resetValidation(); // делаем сброс
  resetScale(); // сбрасываем масштаб
  resetEffect(); //сбрасываем эффекты
});
// ловим отправку формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validate()) { // если валидно
    closeModal(); // делаем сброс
  }
});
