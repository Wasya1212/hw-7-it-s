import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const addImgToGallery = ({ preview, original, description }) => {
  galleryContainer.innerHTML += `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>
  `;
};

galleryItems.map(addImgToGallery);

new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});