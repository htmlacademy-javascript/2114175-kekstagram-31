// const PACK_SIZE = 5; // количество открытых комментов
const shownCount = document.querySelector('.social__comment-shown-count'); // открытые
const totalCount = document.querySelector('.social__comment-total-count'); // всего комментов
const listComments = document.querySelector('.social__comments'); // это ul
const tamplateComment = document.querySelector('.social__comment'); // это li в списке
// кнопка счетчика
// const loaderButton = document.querySelector('.comments-loader');

const createComment = (comment) => {
  const item = tamplateComment.cloneNode(true);
  const img = item.querySelector('.social__pickture');

  img.src = comment.avatar;
  img.alt = comment.name;
  item.querySelector('.social__text').textContent = comment.message;

  return item;
};

// создаем комментарии
export const renderComments = (comments) => {
  // в открытые записываем если комментов до 5 то 5, если нет то то колличество что пришло
  shownCount.textContent = comments.length;
  totalCount.textContent = comments.length;

  listComments.append(...comments.map(createComment));
};
