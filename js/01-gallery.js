import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let galleryItemsString = "";

galleryItems.forEach((galleryItem) => {
    galleryItemsString += `
        <li>
            <div class="gallery__item">
                <a class="gallery__link" href="${galleryItem.original}">
                    <img
                        class="gallery__image"
                        src="${galleryItem.preview}"
                        data-source="${galleryItem.original}"
                        alt="${galleryItem.description}"
                    />
                </a>
            </div>
        </li>    
    `;

});

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", galleryItemsString);
