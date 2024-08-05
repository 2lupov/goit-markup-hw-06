document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector(".close-button");
  const modalOverlay = document.querySelector(".modal-overlay");

  // Закрытие модального окна при клике на кнопку закрытия
  closeButton.addEventListener("click", () => {
    modalOverlay.classList.remove("is-open");
  });

  // Закрытие модального окна при клике на фон (overlay)
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove("is-open");
    }
  });
});
