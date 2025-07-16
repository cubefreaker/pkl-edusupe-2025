document.getElementById("whatsappBtn").addEventListener("click", function() {
    let phoneNumber = '6285812404727';
    let message = 'Halo! Terima Kasih sudah menghubungi kami.';
    let encodedMessage = encodeURIComponent(message); // menggunakan encodeURIComponent untuk memastikan pesan aman untuk URL
    let whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // membuat URL Whatsapp
    window.open(whatsappLink, '_blank'); // membuka jendela whatsapp baru 
});

// // Sembunyikan tombol saat proses print
// window.addEventListener("beforeprint", function() {
//     document.getElementById("whatsappBtn").style.display = "none";
// });

// // Tampilkan kembali tombol setelah print selesai
// window.addEventListener("afterprint", function() {
//     document.getElementById("whatsappBtn").style.display = "inline-block";
// })