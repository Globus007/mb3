const MODAL_ABOUT = document.getElementById('modal-about');
const FORM = document.getElementById('form');

async function sendEmail(event) {
  event.preventDefault();
  MODAL_ABOUT.querySelector('.modal__window').classList.add('sending');
  let formData = new FormData(FORM);
  let response = await fetch('sendMail.php', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();
    alert(result.message);
  } else {
    alert('Ошибка при отправке e-mail');
  }
  FORM.reset();
  MODAL_ABOUT.querySelector('.modal__window').classList.remove('sending');
  window.open('https://drive.google.com/file/d/1ecG1BDekUU2qK5X9MyvWZimQdAitVU21/view?usp=sharing');
  closeModal();
}
