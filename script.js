document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple simulation d'envoi de message
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("successMessage").classList.remove("hidden");
    this.reset();
  }
});