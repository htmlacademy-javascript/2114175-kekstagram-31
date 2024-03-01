import {getRandomArrayElement, getRandomInteger, createIdGeneration} from './util.js';
import {createUserComment} from './comment-card.js';

// данные для блока фотографии
// id фотографии
const getPhotoId = createIdGeneration();

// description фотки
const PHOTO_DESCRIPTIONS = [
  'Я старался',
  'Почти получилось хорошо',
  'Получилось не очень',
  'Мне очень понравилось',
  'Нравится композиция',
  'Было забавно'
];

// собираем блок для фотки
const createPhotoCard = () => {
  const id = getPhotoId();
  const countComments = getRandomInteger(0, 30);
  const comments = Array.from({length: countComments}, createUserComment);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments
  };
};

const photoCardList = () => Array.from({length: 25}, createPhotoCard);

export {photoCardList};
