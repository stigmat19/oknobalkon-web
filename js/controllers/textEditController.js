export function initTextEdit() {
    const modal = document.getElementById('editModal');
    const editableDiv = document.getElementById('editableDiv');
    const closeBtn = document.getElementById('closeBtn');
    const saveBtn = document.getElementById('saveBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    let targetElement = null;
    let originalText = '';

    document.body.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('editableText')) {
            targetElement = e.target;
            originalText = targetElement.textContent;

            editableDiv.textContent = originalText;
            modal.style.display = 'block';
            editableDiv.focus();
        }
    });

    function closeModal(cancel = false) {
        modal.style.display = 'none';
        if (cancel && targetElement) {
            editableDiv.textContent = originalText;
        }
        targetElement = null;
    }

    closeBtn.addEventListener('click', () => closeModal(true));
    cancelBtn.addEventListener('click', () => closeModal(true));

    saveBtn.addEventListener('click', () => {
        if (targetElement) {
            const newText = editableDiv.textContent.trim();
            targetElement.textContent = newText || originalText;
        }
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(true);
    });
}
