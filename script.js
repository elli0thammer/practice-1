// Добавление реакции span на нажатие input
const spanElement = document.querySelector('.modal__img-text');
const inputElement = document.querySelector('.modal__img-upload-input');

spanElement.addEventListener('click', function () {
    inputElement.click();
});

inputElement.addEventListener('change', function () {
    console.log('Выбран файл: ', inputElement.files[0].name);
});

// Реализация открытия и закрытия модального окна
const openModalButton = document.querySelector('.main-page__open-button');
const closeModalButton = document.querySelector('.modal__close-button');
const modalContainer = document.querySelector('.modal-container');

openModalButton.addEventListener('click', function () {
    modalContainer.classList.remove('modal-container--close');
});

closeModalButton.addEventListener('click', function () {
    modalContainer.classList.add('modal-container--close');
});

// Загрузка пользовательского логотипа
const fileInput = document.querySelector('.modal__img-upload-input');
const imgPreview = document.querySelector('.modal__img-upload-preview img');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];

    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
        const reader = new FileReader();

        reader.addEventListener('load', (e) => {
            imgPreview.src = e.target.result;
        });

        reader.readAsDataURL(file);
    } else {
        alert('Выберите файл в формате JPEG или PNG.');
    }
});

