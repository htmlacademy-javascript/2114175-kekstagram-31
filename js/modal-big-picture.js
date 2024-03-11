import {isEscapeKey} from './util.js';
import {photoMock} from './template-picture.js';
import {createUserComment} from './comment-card';

// модальное окно выводящее большую картинку
const pictureModal = document.querySelector('.big-picture');
//данные превью картинки
const pictureModalImg = document.querySelector('.big-picture__img img');
const pictureModalLikes = document.querySelector('.likes-count');
const pictureModalCommentShownCount = document.querySelector('.social__comment-shown-count');
const pictureModalCommentTotalCount = document.querySelector('.social__comment-total-count');
const pictureModalSocialComments = document.querySelector('.social__comments');
const pictureModalDescription = document.querySelector('.social__caption');
// кнопка закрытия окна
const pictureModalClose = pictureModal.querySelector('.cancel');
const body = document.querySelector('body');
// счетчики комментариев
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

// закрытие окна эскейпом
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

// разметка комментария
const createSocialComments = (comment) => {
  const socialCommentImg = document.querySelector('.social__comment img');
  const socialCommentText = document.querySelector('.social__text');
  socialCommentImg.classList.add('social__picture');
  socialCommentImg.src = comment.avatar;
  socialCommentImg.alt = comment.name;
  socialCommentImg.width = 35;
  socialCommentImg.height = 35;
  socialCommentText.textContent = comment.message;
};

// функция для открытия окна
function openUserModal (picture, comment) {
  pictureModalImg.src = picture.url; // привязываем миниатюрное фото к большому
  pictureModalLikes.textContent = picture.likes; // перезаписываем лайки
  pictureModalCommentShownCount.textContent = '2'; // счетчик сколько показывать комментариев
  pictureModalCommentTotalCount.textContent = picture.comments.length; // счетчик всех комментов
  pictureModalSocialComments = comment; // здесь должен быть список
  pictureModalDescription.textContent = picture.description; // описание фотки
  pictureModal.classList.remove('hidden'); // удаляем хидден чтоб открылась модалка
  body.classList.add('modal-open'); // боди не скроль
  socialCommentCount.classList.add('hidden'); // прячем счетчик комментов
  commentsLoader.classList.add('hidden'); // прячем
  document.addEventListener('keydown', onDocumentKeydown); // закрываем эскейпом
}

// функция закрытия модального окна
function closeUserModal () {
  pictureModal.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

// функция поиска картинки и открытия модалки
const onRendePictures = () => {
  const pictures = document.querySelectorAll('.picture__img'); // ищем все отрисованные картинки
  pictures.forEach((picture, index) => { // пройди по всем картинкам и запомни индексы и запиши в пикчер одну
    picture.addEventListener('click', (evt) => { //на каждой итерации проверяй клик
      evt.preventDefault(); // если да то не переходи по ссылке а открой
      openUserModal(photoMock[index]); // модалку в которую передай карточку с индексом итерации на котору кликнули
    });
  });
};

// вызов функция закрытия модалки
pictureModalClose.addEventListener('click', () => {
  closeUserModal();
});

export {onRendePictures};
