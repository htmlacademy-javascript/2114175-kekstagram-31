import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.min.mjs';
// мапа с логикой для стилей
import { EFFECT_OPTION_MAP } from './effect-map';

const form = document.querySelector('.img-upload__form'); // сама форма
const image = form.querySelector('.img-upload__preview img'); // превью картинка
const sliderFieldset = form.querySelector('.img-upload__effect-level'); // филдсет слайдера
const customSliderWrapper = sliderFieldset.querySelector('.effect-level__slider'); // пустой див
const list = form.querySelector('.effects__list'); // лист
// создаем новый евент изменения
const changeEvent = new Event('change');
// с помощью библиотеки создаем массив
const slider = noUiSlider.create(customSliderWrapper, { // запиши сюда
  ...EFFECT_OPTION_MAP.none.slider, // из оригинала базовый объект
  connect: 'lower' // опция нижняя
});
// слайдер будет закрытым изначально
sliderFieldset.hidden = true;
// проходим по всем инпутам
list.addEventListener('change', () => { // ловим изменение на который нажали
  const effect = form.effect.value; // значение пойманного инпута
  sliderFieldset.hidden = effect === 'none'; // говорим что выключенный слайдер имеет стили оригинала
  slider.updateOptions(EFFECT_OPTION_MAP[effect].slider, false); // меняем кофигурацию слайдера
  // у пойманного эффекта ипользуя мапу записываем слайдур из мапы
});
// событие при синхронизации значения слайдера с другим элементом
slider.on('update', () => { // ловим изменения ползунка
  const value = slider.get(); // с помощью метода записываем значение ползунка
  form['effect-level'].value = Number(value); // значение ползунка приводим к строке
  const currentEffect = form.effect.value; // записываем выбранный инпут
  // делаем проверку
  if (currentEffect === 'none') { // выбранный инпут подходит под эффект 'оригинал'
    return image.style.removeProperty('filter'); // то в стилях убираем фильтр
  }
  //создаем фильтр из выбранного инпута из мапы filter
  const filter = EFFECT_OPTION_MAP[currentEffect].filter;
  image.style.filter = filter(value); // картинке в стилях записываем filter из выбранного инпута
});
//создаем функцию сброса
export const resetEffect = () => {
  form.effect.value = 'none'; // записываем в базу оригинал
  list.dispatchEvent(changeEvent); // и диспачим изменение
};
