// данные для карточки коммента
// id комментария
let currentCommentId = 1;
const getCommentId = () => currentCommentId++;

// текст для коммента
const userMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// имена для коммента
const userNames = [
  'Иван',
  'Мария',
  'Кристоф',
  'Юлия',
  'Люпита',
  'Виктор'
];

// фото авторов для коммента
const userAvatars = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg'
];

// данные для блока фотографии
// id фотографии
let currentPhotoId = 1;
const getPhotoId = () => currentPhotoId++;

// url для фото
const getPhotoUrl = (i) => `photos/${i}.jpg`;

// description фотки
const photoDescriptions = [
  'Я старался',
  'Почти получилось хорошо',
  'Получилось не очень',
  'Мне очень понравилось',
  'Нравится композиция',
  'Было забавно'
];

// радомайзер
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// разбираем массив
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// собираем карточку комментария
const createUserComment = () => ({
  id: getCommentId(),
  avatar: getRandomArrayElement(userAvatars),
  message: getRandomArrayElement(userMessages),
  name: getRandomArrayElement(userNames)
});

// собираем блок для фотки
const createphotoCard = () => {
  const id = getPhotoId();
  const countComments = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < countComments; i++) {
    comments.push(createUserComment());
  }

  return {
    id: id,
    url: getPhotoUrl(id),
    description: getRandomArrayElement(photoDescriptions),
    likes: getRandomInteger(15, 200),
    comments: comments
  };
};

createphotoCard(); //  вызов функции чтоб линтер не ругался
