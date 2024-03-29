import { validate } from './hashtags-validate'; // пристин
import { renderSuccess } from '../messages/template-success';
import { renderSubmitErr } from '../messages/submit-err';

const form = document.querySelector('.img-upload__form'); // сама форма
const setUserFormSubmit = (onSuccess) => {
  // ловим отправку формы
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (validate()) { // если валидно
      console.log('валидно');
      const formData = new FormData(evt.target);

      fetch('https://31.javascript.htmlacademy.pro/kekstagram',{
        method: 'POST',
        body: formData
      },
      ).then(onSuccess)
        .then(renderSuccess)
        .catch((err) => {
          console.log('не отправлено');
          renderSubmitErr(err);
        });
    }
  });
};

export {setUserFormSubmit};
