import { isEscapeKey } from '../utils/util.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');

export const renderSuccess = () => {
  const successMessage = templateSuccess.cloneNode(true);
  const button = successMessage.querySelector('.success__button');
  const successInner = successMessage.querySelector('.success__inner');
  document.querySelector('body').append(successMessage);

  const onButtonClick = (evt) => {
    evt.preventDefault();
    removeSuccess();
  };

  const onWindowClick = (evt) => {
    evt.preventDefault();
    if (! successInner.contains(evt.target)) {
      removeSuccess();
    }
  };

  const onWindowKeydawn = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeSuccess();
    }
  };

  button.addEventListener('click', onButtonClick);

  window.addEventListener('keydown', onWindowKeydawn);

  window.addEventListener('click', onWindowClick);

  function removeSuccess() {
    button.removeEventListener('click', onButtonClick);
    window.removeEventListener('keydown', onWindowKeydawn);
    window.removeEventListener('click', onWindowClick);
    successMessage.remove();
  }
};
