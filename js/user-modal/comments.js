const PACK_SIZE = 5; // количество открытых комментов
const shownCount = document.querySelector('.social__comment-shown-count'); // открытые
const totalCount = document.querySelector('.social__comment-total-count'); // всего комментов
const listComments = document.querySelector('.social__comments'); // это ul
const tamplateComment = document.querySelector('.social__comment'); // это li в списке
// кнопка счетчика
const loaderButton = document.querySelector('.comments-loader');

let currentComments = []; // создаем пустой массив комментариев

//создаем один комментарий по шаблону
const createComment = (comment) => {
  const item = tamplateComment.cloneNode(true); // копируем li со всем содержимым
  const img = item.querySelector('.social__picture');// привязываемся к фото шаблона

  img.src = comment.avatar; //переписываем аватар
  img.alt = comment.name; // переписываем описание
  item.querySelector('.social__text').textContent = comment.message;

  return item;
};

// создаем функция работы кнопки открывани комментов
const onLoaderButtonClick = () => {
  const shownComments = listComments.childElementCount; //записываем количество комментариев уже отрисованных на странице
  let endOfSlice = shownComments + PACK_SIZE; // находим конечное число
  //проверяем превысит ли следующая пачка количество всех комментариев фотографии
  const isAllCommentsShown = endOfSlice >= currentComments.length; //и записываем
  endOfSlice = isAllCommentsShown ? currentComments.length : endOfSlice; // если больше или равно конечному числу
  // если тру то оставляем число из массива, если нет записываем конечное число
  // далее вырезаем следующую группу комментариев
  const commentSlice = currentComments.slice(shownComments, endOfSlice);
  //создаем по шаблону кеммент и записываем в массив и записываем в список
  listComments.append(...commentSlice.map(createComment));
  //заисываем в открытые комменты конечное число
  shownCount.textContent = endOfSlice;
  //и скрываем или добавляем класс хидден в зависимости от колличества
  loaderButton.classList.toggle('hidden', isAllCommentsShown);
};
//если нажать на кнопу он должен отработать функцию выше
loaderButton.addEventListener('click', onLoaderButtonClick);

// создаем комментарии
export const renderComments = (comments) => { //принимаем все комменты
  // удалям комменты из шаблона
  listComments.innerHTML = '';
  //записываем в общее число комментов
  totalCount.textContent = comments.length;
  // используем пустой массив и записываем в него комменты
  currentComments = comments;
  // если кликнуть то вызываем клик описанный на 41 строке
  loaderButton.click();
};
