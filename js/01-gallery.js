import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

function createGallery (gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
            <a class = "gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt = "${description}"
              />
            </a>
            </li>`
  }).join("");
}

galleryList.addEventListener("click", handlerGalleryOnClick);


function handlerGalleryOnClick(event) {

  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="500">
    </div>
`)

  instance.show();

  galleryList.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  })
}



















