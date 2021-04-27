const BTN_ABOUT = document.getElementById("about");
const MODAL_ABOUT = document.getElementById("modal-about");
const MODAL_ABOUT_CLOSE = document.getElementById("modal-about-close");

function showModal(event) {
  MODAL_ABOUT.style.display = "flex";
}

function closeModal(event) {
  MODAL_ABOUT.style.display = "none";
}

BTN_ABOUT.addEventListener("click", showModal);
MODAL_ABOUT_CLOSE.addEventListener("click", closeModal);
