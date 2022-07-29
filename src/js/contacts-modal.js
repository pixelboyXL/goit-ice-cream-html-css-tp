

(() => {
  const refs = {
    openModalBtn: document.querySelector(".button-franchise"),
    closeModalBtn: document.querySelector(".contacts-modal-franchise__close-btn"),
    modal: document.querySelector(".contacts-backdrop-franchise"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("fulse-title");
  }
})();
