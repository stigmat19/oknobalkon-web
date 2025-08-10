import { SERVER_URL } from "../config.js";

export async function uploadImage(file, name) {
    const formData = new FormData();
    formData.append(name, file);

    const response = await fetch(`${SERVER_URL}/upload/image`, {
        method: 'POST',
        body: formData
    });

    if (!response.ok) throw new Error('Ошибка загрузки');

    try {
        return await response.json();
    } catch {
        return { message: await response.text() };
    }
}

export async function sendPageHtmlToServer() {
    const url = document.querySelector('input[name="pageName"]').value;
    createUrlForImage();
    const htmlContent = getCleanedHtml(['.no-send', 'script']);

    const response = await fetch(`${SERVER_URL}/save/html`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ htmlContent, pageName: url })
    });

    if (!response.ok) {
        console.error('Ошибка отправки HTML');
        return;
    }

    const result = await response.json();
    console.log('Ответ сервера:', result);
}

function getCleanedHtml (elementsRemoved = []) {
    const container = document.createElement('div');
    container.innerHTML = document.body.innerHTML;

    elementsRemoved.forEach(element => {
        const htmlElements = container.querySelectorAll(element);

        htmlElements.forEach(el => el.remove())
    })

    return container.innerHTML;
}

function createUrlForImage() {
    const uploadImages = document.querySelectorAll('.uploadImage');

    uploadImages.forEach(img => {
        img.src = img.src.split('/')[img.src.split('/').length - 1]
    });
}
