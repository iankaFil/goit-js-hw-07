import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

// function createGallery({ preview, original, description }) {
//     return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </div>`;
// };
// const galleryItem = galleryItems.map(createGallery).join("");

// gallery.innerHTML += galleryItem;

// gallery.addEventListener("click", openImage)

// function openImage(event) {
//     event.preventDefault();

//     if (event.target.nodeName !== "IMG")
//         return;
// }

function makeGallery(arr) {
    const galleryItemsMarkup = arr.map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" 
            href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" /></a></li>`;
    }).join('');
    return gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}

makeGallery(galleryItems);
const galleryEl = new SimpleLightbox('ul.gallery a');
console.log(galleryItems);