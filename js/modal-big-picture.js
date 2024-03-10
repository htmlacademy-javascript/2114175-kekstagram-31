import './template-picture.js';

const pictureModal = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture__img');
const pictureModalClose = pictureModal.querySelector('.cancel');
const body = document.querySelector('body');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

pictures.forEach((picture) => {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    pictureModal.classList.remove('hidden');
    body.classList.add('modal-open');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  });
});

pictureModalClose.addEventListener('click', () => {
  pictureModal.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
});

// закрытые страницы через ескейп
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    pictureModal.classList.add('hidden');
  }
});
