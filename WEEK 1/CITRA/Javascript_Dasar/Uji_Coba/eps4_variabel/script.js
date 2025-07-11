// jadi ini adalah komen, jadi bebas aja

// variabel dengan let
let nama="Citra";

// tampilkan data
console.log(nama);

//  kita ubah nilai variabel nama
nama = "Citra Amellia";
console.log(nama);

//  2. variabel dengan var
var namaDepan = "Citra";
console.log(namaDepan);
namaDepan = "Roro";
console.log(namaDepan);

// kelakuan dari var
let namaBelakang = "Maharani";
{
    let namaBelakang = "Ayu";
    console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan dari var
var namaTengah = "Amellia";
{
    var namaTengah = "Ananda";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword akan jadi var
gorengan = "Bakwan";
{
    gorengan ="Perkedel";
}
console.log(gorengan);

// 3. Const

const TTL = "10 Juli 2025";
console.log(TTL);
// TTL = "11 Juli 2024"; gak boleh dilakukan karena sudah janji constan