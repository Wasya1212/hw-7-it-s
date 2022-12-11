import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const generateGalleryItems = (galleryItems, container) => {
  container.innerHTML = galleryItems.reduce((acc, { preview, original, description }) => acc += `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>
  `, '');
};

generateGalleryItems(galleryItems, galleryContainer);

new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});