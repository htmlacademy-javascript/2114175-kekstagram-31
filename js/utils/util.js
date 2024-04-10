// радомайзер
const getRandomInteger = (minNumbers, maxNumbers) => {
  const lower = Math.ceil(Math.min(minNumbers, maxNumbers));
  const upper = Math.floor(Math.max(minNumbers, maxNumbers));
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

const getSortRandom = () => getRandomInteger(-1, 1);

// функция закрывающая страницу с эскейп
const isEscapeKey = (evt) => evt.key === 'Escape';

// функция на уникальность элемента в массиве
const isUniqueArray = (arrays) => new Set(arrays).size === arrays.length;

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {
  createIdGeneration,
  getRandomArrayElement,
  getRandomInteger,
  isUniqueArray,
  getSortRandom,
  isEscapeKey,
  debounce,
  throttle
};
