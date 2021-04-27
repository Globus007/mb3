const BTN_ABOUT = document.getElementById("about");
const BTN_SING_UP_SCHEDULE = document.getElementById("schedule-sing-up");
const BTN_SING_UP_PRICE = document.getElementById("price-sing-up");
const MODAL_ABOUT = document.getElementById("modal-about");
const CLOSE_BTN = document.getElementById("modal-about-close");
const FORM = document.getElementById("form");

function showModal() {
  MODAL_ABOUT.style.display = "flex";
  window.addEventListener("click", closeModalFromOutside);
}

function closeModalFromOutside(event) {
  if (event.target == MODAL_ABOUT) {
    closeModal();
  }
}

function closeModal() {
  MODAL_ABOUT.style.display = "none";
  window.removeEventListener("click", closeModalFromOutside);
}

async function sendEmail(event) {
  event.preventDefault();
  MODAL_ABOUT.querySelector(".modal__window").classList.add("sending");
  let formData = new FormData(FORM);
  let response = await fetch("sendMail.php", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();
    alert(result.message);
  } else {
    alert("Ошибка при отправке e-mail");
  }
  FORM.reset();
  MODAL_ABOUT.querySelector(".modal__window").classList.remove("sending");
  window.open(
    "https://drive.google.com/file/d/1ecG1BDekUU2qK5X9MyvWZimQdAitVU21/view?usp=sharing"
  );
  closeModal();
}

BTN_ABOUT.addEventListener("click", showModal);
BTN_SING_UP_SCHEDULE.addEventListener("click", showModal);
BTN_SING_UP_PRICE.addEventListener("click", showModal);
CLOSE_BTN.addEventListener("click", closeModal);
FORM.addEventListener("submit", sendEmail);
