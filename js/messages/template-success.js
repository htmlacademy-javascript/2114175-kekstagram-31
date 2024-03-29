import { isEscapeKey } from '../utils/util.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');

export const renderSuccess = () => {
  const successMessage = templateSuccess.cloneNode(true);
  const button = successMessage.querySelector('.success__button');
  const successInner = successMessage.querySelector('.success__inner');
  document.querySelector('body').append(successMessage);

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    successMessage.remove();
  });

  window.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEscapeKey(evt)) {
      successMessage.remove();
    }
  });

  window.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (! successInner.contains(evt.target)) {
      successMessage.remove();
    }
  });
};
