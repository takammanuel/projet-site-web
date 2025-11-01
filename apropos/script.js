
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");
  services.forEach((s, i) => {
    s.style.opacity = 0;
    setTimeout(() => {
      s.style.transition = "opacity 0.7s";
      s.style.opacity = 1;
    }, i * 400);
  });
// Petit effet sur le bouton d’accueil
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-info");
    btn.addEventListener("click", () => {
        alert("Merci ! Un agent prendra contact avec vous pour planifier votre rendez-vous.");
    });

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