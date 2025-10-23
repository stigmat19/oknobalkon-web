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
            await fetch(`${SERVER_URL}/send/form`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name: name, phone: phone, type: type})
            });


            setTimeout(() => {
                window.location.href = `${SERVER_URL}/thanks.html`;
            }, 5000);

        } catch (err){
            alert('Произошла ошибка, попробуйте позже');

            console.log('err', err);
        }
    })
}

