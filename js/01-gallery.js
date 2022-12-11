import { galleryItems } from './gallery-items.js';

function generateGallery (items, container) {
  container.innerHTML = items.reduce((acc, { preview, original, description }) => acc += `
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
  `, '');
  
  let currentInstance = null;
  const instances = {};

  items.forEach(({ original }) => instances[original] = basicLightbox.create(
    `<img src="${original}">`,
    {
      onShow: (instance) => currentInstance = instance
    }
  ));

  return {
    getCurrentInstance: () => currentInstance,
    imgInstances: instances
  };
};

const galleryContainer = document.querySelector('.gallery');

const { getCurrentInstance, imgInstances } = generateGallery(galleryItems, galleryContainer);

galleryContainer.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (e.target.className === 'gallery') return;

  const imgSource = e.target.getAttribute('data-source');
  imgInstances[imgSource].show();
});

// hide modal if escape pressed
document.addEventListener('keydown', ({ keyCode }) => {
  if (keyCode === 27) getCurrentInstance().close();
});