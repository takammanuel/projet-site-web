document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");
  services.forEach((s, i) => {
    s.style.opacity = 0;
    setTimeout(() => {
      s.style.transition = "opacity 0.7s";
      s.style.opacity = 1;
    }, i * 400);
  });
});