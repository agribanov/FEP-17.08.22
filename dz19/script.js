// $('#photos a').simpleLightbox();
const URL = 'https://jsonplaceholder.typicode.com/photos?_limit=25';
const template = $('#photoItemTemplate').html();
const $photosContainer = $('#photos');

init();

function init() {
    fetchPhotos();
}

function fetchPhotos() {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            renderPhotos(data);
        });
}

function renderPhotos(list) {
    const photos = list.map(getPhotoElement);

    $photosContainer.append(photos);

    $photosContainer.find('a').simpleLightbox({
        fileExt: '',
    });
}

function getPhotoElement(photo) {
    return $(interpolate(template, photo));
}
