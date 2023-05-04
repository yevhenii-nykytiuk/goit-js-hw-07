import { galleryItems } from './gallery-items.js';



const galleryList = document.querySelector(".gallery");

const createGalleryLightBox = createGallery(galleryItems)


galleryList.insertAdjacentHTML("afterbegin", createGalleryLightBox);

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
        <img src="${event.target.dataset.source}" width="800" height="600">
    </div>`,

    {
      onShow: () => {
        window.addEventListener("keydown", onEscapeKeyPress);
      },
    
      onClose: () => {
        window.removeEventListener("keydown", onEscapeKeyPress);
      },
    },
  );

  instance.show();
    

  function onEscapeKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}


























