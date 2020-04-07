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

    // Смотрел на галерею и не мог понять, почему они друг на друге сидят...
    liTags.classList.add('gallery__item');
    aTags.classList.add('gallery__link');
    imgTags.classList.add('gallery__image');
    // Теперь другое дело! ))

    aTags.appendChild(imgTags);
    liTags.appendChild(aTags);

    return liTags;
});
// console.log(imgItems);
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
    window.addEventListener('keyup', closeModalByKey);
};

closeBtn.addEventListener('click', () => {
    closeLightBox();
});


//Дополнительно: закрытие по "ESC" и клику не по картинке

function closeLightBox() {
    lightBoxItem.classList.remove('is-open');
    lightBoxImage.removeAttribute('src');
    window.removeEventListener('keyup', closeModalByKey);
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

// Дополнительно: пролистывание изо. в открытом модальном окне кнопками "влево" и "вправо" (обязательно сделаю позже)