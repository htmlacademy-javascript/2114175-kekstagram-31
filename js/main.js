import { savePhotos } from './utils/photo-state.js'; // фукнция записывает в массив входяящие фотки
import { renderThumbnails } from './user-modal/template-picture.js'; // функция с готовым массивом созданная из миниатюр
import { renderError } from './messages/template-err.js'; // темплейт с ошибкой
import { getPhotos } from './form/api.js';
import './form/upload-form.js';
import { handleSelectFilters } from './form/effects-rank.js';

getPhotos()
  .then((photos) => {
    savePhotos(photos);// переписываем их в массив
    renderThumbnails(photos); // и создаем массив для миниатюр на основе массива выше
    renderThumbnails(photos); // и создаем массив для миниатюр на основе массива выше
    handleSelectFilters(photos);
  })
  .catch(renderError);
