import { savePhotos } from './utils/photo-state.js'; // фукнция записывает в массив входяящие фотки
import { renderThumbnails } from './user-modal/template-picture.js'; // функция с готовым массивом созданная из миниатюр
import './form/upload-form.js'; // подключаю на время пока что
import { renderError } from './utils/template-err.js';

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    savePhotos(data);// переписываем их в массив
    renderThumbnails(data); // и создаем массив для миниатюр на основе массива выше
  })
  .catch(renderError);
