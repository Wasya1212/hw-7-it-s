import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

let currentInstance = null;

const addImgToGallery = ({ preview, original, description }) => {
  const imgInstance = basicLightbox.create(
    `<img src="${original}">`,
    {
      onShow: (instance) => currentInstance = instance
    }
  );

  galleryContainer.innerHTML += `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  `;

  return imgInstance;
};

const imgInstances = galleryItems.map(addImgToGallery);

// show original image on click in modal window
galleryContainer.querySelectorAll('img').forEach((img, i) => {
  img.addEventListener('click', () => imgInstances[i].show());
});
// hide modal if escape pressed
document.addEventListener('keydown', e => {
  if (e.keyCode === 27) currentInstance.close();
});
// prevent links redirecting
galleryContainer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});