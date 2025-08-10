export function newBackController() {
    const list = document.querySelector('.models-list');
    const addTile = document.querySelector('.add-tile');
    const deleteTile = document.querySelector('.delete-tile');
    const deleteNewBack = document.querySelectorAll('.delete-new-back');
    const deleteReflect = document.querySelector('.delete-reflect');

    addTile.addEventListener('click', () => {
        const title = prompt('Введите заголовок');
        const description = prompt('Введите текст');

        const template = `
            <div>
                <ul>
                    <li>${list.children.length + 1}</li>
                    <li><h5>${title}</h5></li>
                    <li><p>${description}</p></li>
                </ul>
            </div>    
        `

        list.innerHTML += template;
    })

    deleteTile.addEventListener('click', () => {
        if (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
        }
    })

    deleteReflect.addEventListener('click', () => {
        deleteReflect.parentElement.remove()
    })

    deleteNewBack.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.parentElement.innerHTML = ''
        })
    })
}
