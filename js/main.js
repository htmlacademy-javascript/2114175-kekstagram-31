import { savePhotos } from './utils/photo-state.js'; // фукнция записывает в массив входяящие фотки
import { renderThumbnails } from './user-modal/template-picture.js'; // функция с готовым массивом созданная из миниатюр
import { renderError } from './messages/template-err.js'; // темплейт с ошибкой
import { setUserFormSubmit } from './form/form-submit.js'; // логика работы сабмита
import { closeModal } from './form/upload-form.js'; // логика закрытия формы

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    savePhotos(data);// переписываем их в массив
    renderThumbnails(data); // и создаем массив для миниатюр на основе массива выше
  })
  .catch(renderError);

setUserFormSubmit(closeModal);
