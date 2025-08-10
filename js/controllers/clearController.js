import { SERVER_URL } from "../config.js";


export function initClear(){
    const cleatBtn = document.getElementById('clear');

    cleatBtn.addEventListener('click', () => {
        try {
            fetch(`${SERVER_URL}/form/clear-page`, {
                method: 'POST'
            })
        } catch (error) {
            console.log('clear error', error);
        } finally {
            window.location.reload()
        }
    })
}
