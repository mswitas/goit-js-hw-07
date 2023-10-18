import { galleryItems } from './gallery-items.js';
// Change code below this line

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
gallery.addEventListener("click", openImgInModal);

function openImgInModal(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }  

    const imgUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${imgUrl}" id="lightBox" width="1280" height="855">
    `, {
        closable: false
    });
    instance.show(() => {
        document.body.addEventListener("keydown", closeLightbox);
        document.body.addEventListener("mouseup", closeLightbox);
    });

    function closeLightbox(event) {
        const eventCondition = event.code === "Escape" || typeof event.code === "undefined";

        if (eventCondition) {
            instance.close(() => {
                document.body.removeEventListener("keydown", closeLightbox);
                document.body.removeEventListener("mouseup", closeLightbox);
            });
        }
    }
}
