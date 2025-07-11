document.getElementById("whatsappBtn").addEventListener("click", function() {
    let phoneNumber = '6285812404727';
    let message = 'Halo, saya ingin bertanya tentang produk anda.';
    let encodedMessage = encodeURIComponent(message); // menggunakan encodeURIComponent untuk memastikan pesan aman untuk URL
    let whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // membuat URL Whatsapp
    window.open(whatsappLink, '_blank'); // membuka jendela whatsapp baru 
});