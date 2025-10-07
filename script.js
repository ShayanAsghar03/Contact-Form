document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusMessage = document.getElementById("statusMessage");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector(".btn-text");
  const spinner = submitBtn.querySelector(".spinner");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !subject || !message) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  if (!email.match(emailPattern)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  spinner.style.display = "inline-block";
  btnText.textContent = "Sending...";
  submitBtn.disabled = true;

  setTimeout(() => {
    spinner.style.display = "none";
    btnText.textContent = "Send Message";
    submitBtn.disabled = false;

    showMessage("Your message has been sent successfully!", "success");
    document.getElementById("contactForm").reset();
  }, 2500);
});

function showMessage(message, type) {
  const statusMessage = document.getElementById("statusMessage");
  statusMessage.textContent = message;
  statusMessage.className = type;

  setTimeout(() => {
    statusMessage.textContent = "";
  }, 4000);
}
