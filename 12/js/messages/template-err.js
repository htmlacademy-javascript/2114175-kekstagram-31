const templateError = document.querySelector('#data-error').content.querySelector('.data-error');

export const renderError = () => {
  const errorMessage = templateError.cloneNode(true);
  document.querySelector('body').append(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  } , 5000);
};
