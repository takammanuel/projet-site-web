// Petit effet sur le bouton d’accueil
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-info");
    btn.addEventListener("click", () => {
        alert("Merci ! Un agent prendra contact avec vous pour planifier votre rendez-vous.");
    });
});