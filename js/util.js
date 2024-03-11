// радомайзер
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// разбираем массив с помощью рандомайзера
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// функция для создания id
const createIdGeneration = () => {
  let lastId = 1;

  return () => lastId++;
};

// функция закрывающая страницу с эскейп
const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  createIdGeneration,
  getRandomArrayElement,
  getRandomInteger,
  isEscapeKey
};
