<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");
  services.forEach((s, i) => {
    s.style.opacity = 0;
    setTimeout(() => {
      s.style.transition = "opacity 0.7s";
      s.style.opacity = 1;
    }, i * 400);
  });
=======
=======
>>>>>>> apropos
// Petit effet sur le bouton d’accueil
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-info");
    btn.addEventListener("click", () => {
        alert("Merci ! Un agent prendra contact avec vous pour planifier votre rendez-vous.");
    });
<<<<<<< HEAD
>>>>>>> a59e1cc (Nettoyage avant fusion et ajout de mes fichiers)
=======
>>>>>>> apropos
=======
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
>>>>>>> 0c47b9bf977405e5ace6dd1232cafabe61612568
});