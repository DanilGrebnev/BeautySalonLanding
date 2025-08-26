// Скрипт для открытия изображений в модальном окне

document.addEventListener("DOMContentLoaded", function () {
    // Создаем модальное окно
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img class="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    // Получаем элементы модального окна
    const modalImage = modal.querySelector(".modal-image");
    const closeBtn = modal.querySelector(".modal-close");

    // Находим все изображения, которые должны открываться в модальном окне
    const images = document.querySelectorAll(
        ".main-photo img, .work-thumbnails img, .gallery-grid img, .work-process-photo img"
    );

    // Добавляем обработчик клика для каждого изображения
    images.forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
        });
    });

    // Закрытие модального окна при клике на крестик
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Возвращаем прокрутку страницы
    });

    // Закрытие модального окна при клике вне изображения
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Закрытие модального окна при нажатии Escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
