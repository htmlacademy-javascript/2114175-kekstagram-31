import { createPhotoCardList } from './photo-card.js'; // функция с фотками из папки списком
import { savePhotos } from './photo-state.js'; // фукнция записывает в массив входяящие фотки
import { renderThumbnails } from './template-picture.js'; // функция с готовым массивом созданная из миниатюр
import './upload-form.js'; // подключаю на время пока что

const photos = createPhotoCardList(25);// создаем список фотографий
savePhotos(photos);// переписываем их в массив
renderThumbnails(photos); // и создаем массив для миниатюр на основе массива выше
