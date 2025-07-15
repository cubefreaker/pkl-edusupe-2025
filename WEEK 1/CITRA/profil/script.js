document.addEventListener("DOMContentLoaded", function () {
  const nomorElement = document.querySelector(".nomer");
  const nomorWa = "6289524085435"; 

  nomorElement.innerHTML = `
    <a href="https://wa.me/${nomorWa}" target="_blank">
      +62 895-2408-5435
    </a>
  `;
});
