import { renderComments } from './comments.js';
import { isEscapeKey } from '../utils/util.js';

const body = document.body;
// модальное окно выводящее большую картинку
const pictureModal = document.querySelector('.big-picture');
//данные превью картинки
const pictureModalImg = document.querySelector('.big-picture__img img');
const pictureModalLikes = document.querySelector('.likes-count');
const pictureModalDescription = document.querySelector('.social__caption');
// кнопка закрытия окна
const closeButton = pictureModal.querySelector('.cancel');

// закрытие окна эскейпом
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};
// создаем функцию которая меняет классы
const toggleClasses = (willBeOpened = true) => {
  pictureModal.classList.toggle('hidden', !willBeOpened); // удаляем хидден чтоб открылась модалка
  body.classList.toggle('modal-open', willBeOpened); // боди не скроль
};

// отдельная функция создания фотки
const renderPhoto = (photo) => {
  pictureModalImg.src = photo.url; // привязываем миниатюрное фото к большому
  pictureModalLikes.textContent = photo.likes; // перезаписываем лайки
  pictureModalDescription.textContent = photo.description; // описание фотки
};

// функция для открытия окна
export function openUserModal(picture) {
  toggleClasses(true); // меняем классы
  renderPhoto(picture); // рисуем фото
  renderComments(picture.comments); // рисуем комменты
  document.addEventListener('keydown', onDocumentKeydown); // закрываем эскейпом
}

// функция закрытия модального окна
function closeUserModal() {
  document.removeEventListener('keydown', onDocumentKeydown); //закрытие через ескейп
  toggleClasses(false); // меняем классы
}

// вызов функции закрытия модалки
const handleCloseButtonClick = closeUserModal;
closeButton.addEventListener('click', handleCloseButtonClick);
