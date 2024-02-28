import {getRandomArrayElement, getRandomInteger, createIdGeneration} from './util.js';
// данные для карточки коммента
// id комментария
const getCommentId = () => createIdGeneration();

// текст для коммента
const USER_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// имена для коммента
const USER_NAMES = [
  'Иван',
  'Мария',
  'Кристоф',
  'Юлия',
  'Люпита',
  'Виктор'
];

// собираем карточку комментария
const createUserComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(USER_MESSAGES),
  name: getRandomArrayElement(USER_NAMES)
});

export {createUserComment};
