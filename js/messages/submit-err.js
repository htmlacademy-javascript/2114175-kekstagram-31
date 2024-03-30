import { isEscapeKey } from '../utils/util.js';

const templateSubmitErr = document.querySelector('#error').content.querySelector('.error');

export const renderSubmitErr = () => {
  const successMessage = templateSubmitErr.cloneNode(true);
  const button = successMessage.querySelector('.error__button');
  const successInner = successMessage.querySelector('.error__inner');
  document.querySelector('body').append(successMessage);

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeMessage();
  });

  const onKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeMessage();
    }
  };
  window.addEventListener('keydown', onKeyDown);

  const onClick = (evt) => {
    evt.preventDefault();
    if (! successInner.contains(evt.target)) {
      removeMessage();
    }
  };
  window.addEventListener('click', onClick);

  function removeMessage() {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('click', onClick);
    successMessage.remove();
  }
};
