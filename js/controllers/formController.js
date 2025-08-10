import { SERVER_URL } from "../config.js";

export function initForm() {
    const form = document.querySelector('form'); // если у формы нет id

    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {
            filename: form.filename ? form.filename.value.trim() : '',
            title: form.fileTitle ? form.fileTitle.value.trim() : '',
            name: form.name ? form.name.value.trim() : '',
            phone: form.phone ? form.phone.value.trim() : ''
        };

        try {
            const response = await fetch(`${SERVER_URL}/form/create-page`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const text = await response.text();
            console.log('----data', text);
        } catch (error) {
            console.error('form submit error', error);
        }
    });
}
