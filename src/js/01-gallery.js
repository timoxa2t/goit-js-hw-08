// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galeryEl = document.querySelector(".gallery");

const images = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <a class="galery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}" 
            data-source="${original}"
            alt="${description}"
        />
    </a>
`
  )
  .join("");

galeryEl.insertAdjacentHTML("afterbegin", images);
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

