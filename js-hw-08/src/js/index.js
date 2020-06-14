'use strict';
import images from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');
const lightBoxImage = document.querySelector('.lightbox__image');
const lightBoxItem = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');

const imgItems = images.map(e => {
    const liTags = document.createElement('li'),
        aTags = document.createElement('a'),
        imgTags = document.createElement('img');

    aTags.setAttribute('href', e.original);
    imgTags.setAttribute('src', e.preview);
    imgTags.setAttribute('data-source', e.original);
    imgTags.setAttribute('alt', e.description);

    liTags.classList.add('gallery__item');
    aTags.classList.add('gallery__link');
    imgTags.classList.add('gallery__image');

    aTags.appendChild(imgTags);
    liTags.appendChild(aTags);

    return liTags;
});

galleryList.append(...imgItems);


galleryList.addEventListener('click', imgClick);

function imgClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    };
    lightBoxItem.classList.add('is-open');
    lightBoxImage.src = e.target.getAttribute('data-source');

    // Добавленно при выполнении доп.задачи
    document.body.addEventListener('click', closeModal);
    window.addEventListener('keydown', scrolling);
    window.addEventListener('keyup', closeModalByKey);
};

closeBtn.addEventListener('click', closeLightBox);


//Дополнительно: закрытие по "ESC" и клику не по картинке

function closeLightBox() {
    lightBoxItem.classList.remove('is-open');
    lightBoxImage.src = "";
    window.removeEventListener('keyup', closeModalByKey);
    window.removeEventListener('keydown', scrolling);
}

function closeModalByKey(event) {
    if (event.code === 'Escape') {
        closeLightBox();
    }
};

function closeModal(event) {
    if (event.target.tagName !== 'IMG') {
        closeLightBox();
    }
};

// Дополнительно: пролистывание изо. в открытом модальном окне кнопками "влево" и "вправо"

const getCurrentImgPosition = () => {
    const currentImageSource = lightBoxImage.getAttribute('src');
    const currentImageIndex = images.indexOf(
        images.find(({ original }) => original === currentImageSource),
    );

    return currentImageIndex;
};

const nextImgSrc = () => {
    const currentImgIdx = getCurrentImgPosition();
    const endOfGalleryIdx = images.length - 1;
    if (currentImgIdx === endOfGalleryIdx) {
        return images[0].original;
    }
    return images[currentImgIdx + 1].original;
};

const prevImgSrc = () => {
    const currentImgIdx = getCurrentImgPosition();
    const endOfGalleryIdx = images.length - 1;
    if (currentImgIdx === 0) {
        return images[endOfGalleryIdx].original;
    }
    return images[currentImgIdx - 1].original;
};

function scrolling(e) {
    if (e.code === 'ArrowRight') {
        lightBoxImage.setAttribute('src', `${nextImgSrc()}`);
    };

    if (e.code === 'ArrowLeft') {
        lightBoxImage.setAttribute('src', `${prevImgSrc()}`);
    };
};

//