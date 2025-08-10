import { initClear } from "./controllers/clearController.js";
import { initForm } from "./controllers/formController.js";
import { initUpload } from "./controllers/uploadController.js";
import { initTextEdit } from "./controllers/textEditController.js";
import { ourAdvantagesInit } from "./controllers/ourAdvantagesController.js";
import { newBackController } from "./controllers/newBackController.js";
import { sendPageHtmlToServer } from "./service/apiService.js";

document.addEventListener("DOMContentLoaded", () => {
    initClear();
    initForm();
    document.querySelectorAll('.manufacturing-img').forEach(container => {
        initUpload(container);
    });
    document.querySelectorAll('.our-advantages').forEach(container => {
        ourAdvantagesInit(container)
    })
    newBackController();
    initTextEdit();

    const sendPageBtn = document.querySelector('.send-page');
    sendPageBtn.addEventListener('click', () => sendPageHtmlToServer())

    const ourAdvantagesTextDel = document.querySelector('.our-advantages-text-del');
    ourAdvantagesTextDel.addEventListener('click', () => {
        document.querySelector('.our-advantages-text-del + p').remove()
    })
});
