import { uploadImage } from "../service/apiService.js";

export function initUpload(container) {
    const uploadImageElem = container.querySelector('.uploadImage');
    const pageName = document.querySelector('[name="pageName"]');
    const fileInput = container.querySelector('.fileInput');

    if (!uploadImageElem || !fileInput) {
        console.warn('В контейнере отсутствует uploadImage или fileInput');
        return;
    }

    uploadImageElem.style.cursor = 'pointer'; // чтобы явно показать, что кликабельно

    // Клик по картинке — открываем input выбора файла
    uploadImageElem.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', async function () {
        const file = this.files[0];
        if (!file) return;

        try {
            const result = await uploadImage(file, fileInput.name, pageName.value); // ваша функция загрузки
            alert(result.message || 'Файл загружен');

            // Если backend возвращает url в result.filename
            if (result.filename) {
                uploadImageElem.src = result.filename;
            }
        } catch (err) {
            alert('Ошибка загрузки или сетевая ошибка');
            console.error(err);
        }
    });
}

