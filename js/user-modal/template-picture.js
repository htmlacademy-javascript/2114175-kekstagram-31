import { openUserModal } from './modal-big-picture';
import { getPhotoById } from '../utils/photo-state';

//шаблон
const templateElement = document.querySelector('#picture').content.querySelector('.picture');
// контайнер куда будем загружать фотки
const container = document.querySelector('.pictures');
// создаем функцию где заполняем данными фото
const createThumbnail = (photo) => {
  const thumbnail = templateElement.cloneNode(true);
  thumbnail.href = `${photo.id}`;
  thumbnail.dataset.id = photo.id;
  const thumbnailImg = thumbnail.querySelector('.picture__img');
  thumbnailImg.src = photo.url;
  thumbnailImg.alt = photo.description;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

  return thumbnail; // возвращаем готовое фото по шаблону
};

// создаем функцию которая принимает все фотографии
const renderThumbnails = (photos) => container.append(...photos.map(createThumbnail));
// создаем фото, и записываем в массив входящих фотографий, и это все записывам в контейнер

// вешаем слушатель на контейнер
container.addEventListener('click', (evt) => { // если в контенерн кликнули
  const thumbnail = evt.target.closest('.picture'); // то поймай миниатюру с классом пикчер
  if (thumbnail === null) { // если не нашел то выход
    return;
  }

  evt. preventDefault(); // если нет то отменяем переход
  const id = Number(thumbnail.dataset.id); // создаем id где записывает числом id миниатюры
  const photo = getPhotoById(id); // создаем  фото с идентичным id
  if(!photo) { // если не нашел такое то выход
    return;
  }

  openUserModal(photo); // и открой модалку с фото вписанным id
});

export {renderThumbnails};
