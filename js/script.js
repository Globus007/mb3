const BTN_ABOUT = document.getElementById("about");
const BTN_SING_UP_SCHEDULE = document.getElementById("schedule-sing-up");
const BTN_SING_UP_PRICE = document.getElementById("price-sing-up");
const MODAL_ABOUT = document.getElementById("modal-about");
const MODAL_ABOUT_CLOSE = document.getElementById("modal-about-close");
const FORM = document.getElementById("form");

function showModal(event) {
  MODAL_ABOUT.style.display = "flex";
}

function closeModal(event) {
  MODAL_ABOUT.style.display = "none";
}

async function sendEmail(event) {
  event.preventDefault();
  let formData = new FormData(FORM);
  let response = await fetch("sendMail.php", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();
    alert(result.message);
    FORM.reset();
  } else {
    alert("Ошибка при отправке e-mail");
  }
}

BTN_ABOUT.addEventListener("click", showModal);
BTN_SING_UP_SCHEDULE.addEventListener("click", showModal);
BTN_SING_UP_PRICE.addEventListener("click", showModal);
MODAL_ABOUT_CLOSE.addEventListener("click", closeModal);
FORM.addEventListener("submit", sendEmail);
