document.getElementById ("bukaWhatsAppp").addEventListener("click", function() {
    const phoneNumber = '6285776602241';
    const message = 'Halo, saya ingin bertanya tentang mu.';
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  });