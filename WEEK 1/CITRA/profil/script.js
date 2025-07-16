document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsappBtn");

  whatsappBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const phone = "6289524085435";
    const message = encodeURIComponent("Hai Selamat datang, perkenalkan saya Citra");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  });
});
