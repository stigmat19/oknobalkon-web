import { SERVER_URL } from './config.js';

const forms = document.forms;

for (let i = 0; i < forms.length; i++) {
    const form = forms[i];

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = e.target.querySelector("[name='name']").value;
        const phone = e.target.querySelector("[name='phone']").value;
        const type = e.target.querySelector("[name='type']")?.value;

        try {
            const response = await fetch(`${SERVER_URL}/send/form`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name: name, phone: phone, type: type})
            });
            // из объекта ответа извлекаем текст ответа
            const responseText = await response.text();
            const modalThanks = document.getElementById('modalThanks');
            modalThanks.className += ' active';

            setTimeout(() => { modalThanks.className = 'modal-thanks'; }, 5000);

        } catch (err){
            alert('Произошла ошибка, попробуйте позже');

            console.log('err', err);
        }
    })
}

