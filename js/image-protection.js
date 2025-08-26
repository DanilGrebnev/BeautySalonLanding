// Защита изображений от скачивания

document.addEventListener("DOMContentLoaded", function () {
    // Отключаем правый клик на всех изображениях
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.oncontextmenu = function () {
            return false;
        };

        // Отключаем перетаскивание изображений
        img.ondragstart = function () {
            return false;
        };

        // Отключаем выделение изображений
        img.onselectstart = function () {
            return false;
        };
    });

    // Отключаем сохранение через Ctrl+S
    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.key === "s") {
            e.preventDefault();
            return false;
        }

        // Отключаем F12 (инструменты разработчика)
        if (e.key === "F12") {
            e.preventDefault();
            return false;
        }

        // Отключаем Ctrl+Shift+I (инструменты разработчика)
        if (e.ctrlKey && e.shiftKey && e.key === "I") {
            e.preventDefault();
            return false;
        }

        // Отключаем Ctrl+U (просмотр исходного кода)
        if (e.ctrlKey && e.key === "u") {
            e.preventDefault();
            return false;
        }
    });

    // Больше никаких наложенных слоев — кликаем напрямую по изображению
    // Ничего не добавляем, модалка навешивает обработчики на сами <img>
});
