export function ourAdvantagesInit(container) {
    const list = container.querySelector('ul');
    const addAdvantages = container.querySelector('.our-advantages .add');
    const deleteAdvantages = container.querySelector('.our-advantages .delete');

    addAdvantages.addEventListener('click', () => {
        const text = prompt('Введите текст');
        const li = document.createElement('li');
        li.className = 'editableText';

        const img = document.createElement('img');
        img.src = '../img/icons/Vector.png';
        img.height = 30;
        img.width = 30;
        li.appendChild(img);

        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);

        list.appendChild(li);
    });

    deleteAdvantages.addEventListener('click', () => {
        if (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
        }
    })
}
