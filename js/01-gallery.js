import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGallery({ preview, original, description }) {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
};
const galleryItem = galleryItems.map(createGallery).join("");

gallery.innerHTML += galleryItem;

gallery.addEventListener("click", openImage)

function openImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG")
        return;

    const instance = basicLightbox.create(
        `
  <div class="modal">
    <img
    class="modal__image"
    src="${event.target.dataset.source}"
    />
  </div>
  `,
        {
            onShow: instance => {
                window.addEventListener('keydown', onEscPress);
                instance.element().querySelector('img').onclick = instance.close;
            },
            onClose: instance => {
                window.removeEventListener('keydown', onEscPress);
            },
        }
    );

    function onEscPress(eve) {
        if (eve.code === 'Escape') {
            instance.close();
        }
    }

    instance.show();
}