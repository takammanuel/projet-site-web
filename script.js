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
// Petit effet sur le bouton d’accueil
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-info");
    btn.addEventListener("click", () => {
        alert("Merci ! Un agent prendra contact avec vous pour planifier votre rendez-vous.");
    });
>>>>>>> a59e1cc (Nettoyage avant fusion et ajout de mes fichiers)
});