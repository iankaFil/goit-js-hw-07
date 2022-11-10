import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

function makeGallery(arr) {
    const galleryItemsMarkup = arr.map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" 
            href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" /></a></li>`;
    }).join('');
    return gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}

makeGallery(galleryItems);
const galleryEl = new SimpleLightbox('ul.gallery a', {
    captionsData: "alt",
    captionsDelay: 250,
});
console.log(galleryItems);