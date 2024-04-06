import { clearThumbnails, renderThumbnails } from '../user-modal/template-picture.js';
import { debounce } from '../utils/util.js';
import { idToFilter } from './filter-options.js';

const filterForm = document.querySelector('.img-filters');
const filterItems = filterForm.querySelector('.img-filters__form');

let activeFilter = filterForm.querySelector('.img-filters__button--active');

const switchButtons = (newActive) => {
  newActive.classList.add('img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
  activeFilter = newActive;
};

const sortPhotos = (filterId, photos) => {
  clearThumbnails();

  let sortedPhotos = photos;

  if (filterId in idToFilter) {
    const sort = idToFilter[filterId];
    sortedPhotos = sort(photos);
  }

  renderThumbnails(sortedPhotos);
};

const debouncedSortPhotos = debounce(sortPhotos);

const handleSelectFilters = (photos) => {
  filterForm.classList.remove('img-filters--inactive');

  filterItems.addEventListener('click', (evt) => {
    const newFilter = evt.target;
    if (activeFilter !== newFilter) {
      switchButtons(newFilter);
      debouncedSortPhotos(newFilter.id, photos);
    }
  });
};

export { handleSelectFilters };
