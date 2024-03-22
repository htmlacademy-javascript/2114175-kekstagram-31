import 'nouislider/dist/nouislider.min.mjs';
// создаем обект с min 0, max 1, step 0.1
const FROM_ZERO_TO_ONE = createSliderData(0, 1, 0.1);
// создаем обект min  0, max 100, step 1, start max из шаблона
const FROM_ZERO_TO_HUNDRED = createSliderData();
// создаем перечисления стилей
export const Effect = 'none' | 'chrome' | 'sepia' | 'marvin' | 'phobos' | 'heat';
// создаем мапу с прописанной логикой стилей
export const EFFECT_OPTION_MAP = {
  // оригинал
  none: {
    slider: FROM_ZERO_TO_HUNDRED // ему задаем зачения из шаблона
  },
  // Хром
  chrome: {
    slider: FROM_ZERO_TO_ONE, // у него min 0, max 1, step 0.1
    filter: (value) => `grayscale(${value})` // записываем входящее число в фильтры
  },
  // Сепия
  sepia: {
    slider: FROM_ZERO_TO_ONE, // у него min 0, max 1, step 0.1
    filter: (value) => `sepia(${value})` // записываем входящее число в фильтры
  },
  // Марвин
  marvin: {
    slider: FROM_ZERO_TO_HUNDRED, // у него в процентах min 0, max 100, step 1%
    filter: (value) => `invert(${value}%)` // записываем входящее число в фильтры
  },
  // Фобос
  phobos: {
    slider: createSliderData(0, 3, 0.1), // у него в px min 0, max 3, step 0.1 px
    filter: (value) => `blur(${value}px)` // записываем входящее число в фильтры
  },
  // Зной
  heat: {
    slider: createSliderData(1, 3, 0.1), // у него min 1, max 3, step 0.1
    filter: (value) => `brightness(${value})` // записываем входящее число в фильтры
  }
};
// создаем функцию с объектом данных и он как шаблон идет
function createSliderData(min = 0, max = 100, step = 1, start = max) {
  return {
    range : {
      min, // минимальное значение
      max // максимальное значение
    },
    start, // с какого числа начинается
    step // размер шага
  };
}
