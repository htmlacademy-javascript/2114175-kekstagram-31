import { isEscapeKey } from '../utils/util.js';
import '../user-modal/modal-big-picture.js';
import { resetValidation } from './hashtags-validate.js';
import { resetScale } from './scale-range.js';
import { resetEffect } from './effects.js';
import { validate } from './hashtags-validate.js'; // пристин
import { renderSuccess } from '../messages/template-success.js';
import { renderSubmitErr } from '../messages/submit-err.js';
import { uploadNewPhoto } from './api.js';

const body = document.body;

const form = document.querySelector('.img-upload__form'); // сама форма
const filename = form.filename; // инпут формы (красная)
const editingModal = form.querySelector('.img-upload__overlay'); // форма с фильтрами
const submitButton = form.querySelector('.img-upload__submit'); // кнопка "Опубликовать"

export const closeModal = () => form.reset(); // функция сброса

const isErrorOpened = () => document.querySelector('.error') !== null; // проверяет открыта ли модалка с ошибкой

// функция для поиска наличия хэштэгов и description
const isFocusText = () =>
  [form.hashtags, form.description] // среди них
    .includes(document.activeElement); // найди активный элемент

// закрытие окна эскейпом
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isErrorOpened() && !isFocusText()) {
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
  document.addEventListener('keydown', onDocumentKeydown); // прописываем слушатель события клик эскейп
});
// ловим нажатие сброса
form.addEventListener('reset', () => {
  classToggle(); // меняем классы
  document.removeEventListener('keydown', onDocumentKeydown); // удаляем слушатель события клик эскейп
  resetValidation(); // делаем сброс
  resetScale(); // сбрасываем масштаб
  resetEffect(); //сбрасываем эффекты
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

// ловим отправку формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validate()) { // если валидно
    // console.log('валидно');
    blockSubmitButton();
    uploadNewPhoto(new FormData(form))
      .then(() => {
        renderSuccess();
        closeModal();
      })
      .catch(renderSubmitErr)
      .finally(unblockSubmitButton);
  }
});
