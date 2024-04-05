import { getSortRandome } from '../utils/util.js';
// логика работы сортировки

const Filters = {
  DEFAULT_FILTER: 'filter-default',
  RANDOM_FILTER: 'filter-random',
  DISCUSSED_FILTER: 'filter-discussed'
};

const RandomFilterParams = {
  MIN: 0,
  MAX: 10
};

const filterRandom = (photos) =>
  photos.toSorted(getSortRandome)
    .slice(RandomFilterParams.MIN, RandomFilterParams.MAX);

const getCommentsAmount = (photo) => photo.comments.length;

const discussedSort = (first, second) => {
  const commentFirst = getCommentsAmount(first);
  const commentSecond = getCommentsAmount(second);

  return commentSecond - commentFirst;
};

const sortDiscussed = (photos) => photos.toSorted(discussedSort);

const idToFilter = {
  [Filters.RANDOM_FILTER]: filterRandom,
  [Filters.DISCUSSED_FILTER]: sortDiscussed
};

export { Filters, idToFilter};
