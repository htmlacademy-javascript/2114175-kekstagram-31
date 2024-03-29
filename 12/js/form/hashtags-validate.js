import { isUniqueArray } from '../utils/util.js';
import Pristine from 'pristinejs';

const form = document.querySelector('.img-upload__form'); // сама форма
// перечисление ошибок
const Hashtags = {
  MAX_COUNT: 5, // максимальное количество хэштегов
  MAX_COUNT_ERROR: 'Нельзя указать больше пяти хэштегов', // ошибка превышения кол-ва хэштегов
  UNIQUE_ERROR: 'Один и тот же хэштег не может быть использован дважды', // ошибка если повторяется хэштег
  HASH_START_ERROR: 'Хэштег должен начинаться с #', // ошибка если не с # начать писать
  LENGTH_ERROR: 'Максимальная длина хэштега 20 символов, включая решетку', // ошибка если превышает 20 символов
  CHARACTERS_ERROR: 'Строка должна состоять из букв и цифр, а так жде не может содержать спецсимволы и пробелы',
  //ошибка если не введены спецсимволы
  ONLY_HASH_ERROR: 'Хэштег не может состоять только из одной решетки', // ошибка пустого хэштега с решеткой
  MAX_LENGTH : 20 // максимальная длина хэштега
};
//максимальная длина комментария
const Description = {
  MAX_LENGTH: 140
};
//записываем то что можно использовать
const HASHTAG_REG_EXP = /^#[a-zа-яё0-9]{1,19}$/;
// библиотека пристин
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper', // меняем класс
  errorTextParent: 'img-upload__field-wrapper' // выводи сообщение об ошибке
});
// пустая строка для замыкания
let hashtagsError = '';
// пишем функцию валидацию введенного текста
const validateHashtags = (value) => {
  if (!value.length) { // если ничего не ввели
    return true;
  }
  // записываем входящее значение, которому убираем пробелы по бокам, приводим к маленьким буквам
  //и проверяем есть ли запрещенные символы
  const tags = value.trim().toLowerCase().split(/\s*(?=#)/);
  // если количество хэштегов больше 5
  if (tags.length > Hashtags.MAX_COUNT) {
    hashtagsError = Hashtags.MAX_COUNT_ERROR; // выводим ошибку и записываем в пустую строку выше
    return false;
  }
  // проверяем хэштеги на уникальность
  if (!isUniqueArray(tags)) { // если есть повторяющиеся
    hashtagsError = Hashtags.UNIQUE_ERROR; // выводим ошибку и записываем в пустую строку выше
    return false;
  }
  // проверяет, удовлетворяют ли все элементы массива условию
  return tags.every((tag) => {
    // если хэштег не начинается с #
    if (tag[0] !== '#') {
      hashtagsError = Hashtags.HASH_START_ERROR; // выводим ошибку и записываем в пустую строку выше
      return false;
    }
    // если длина комментария больше 20
    if (tag.length > Hashtags.MAX_LENGTH) {
      hashtagsError = Hashtags.LENGTH_ERROR; // выводим ошибку и записываем в пустую строку выше
      return false;
    }
    // если хэштег состоит только из одного #
    if (tag === '#') {
      hashtagsError = Hashtags.ONLY_HASH_ERROR; // выводим ошибку и записываем в пустую строку выше
      return false;
    }
    // берем хэштег и проверяем есть ли запрещенные символы
    if (!HASHTAG_REG_EXP.test(tag)) {
      hashtagsError = Hashtags.CHARACTERS_ERROR; // выводим ошибку и записываем в пустую строку выше
      return false;
    }

    return true;
  });
};
// валидатор
pristine.addValidator(form.hashtags, validateHashtags, () => hashtagsError); //
pristine.addValidator( //
  form.description, // в форму с вводом коммента
  (value) => value.length <= Description.MAX_LENGTH, // записываем максимальное количество символов
  `Максимальная длина комментария ${Description.MAX_LENGTH} символов` // и выводим ошибку
);

const validate = () => pristine.validate();
const resetValidation = () => pristine.reset();

export {validate, resetValidation};
