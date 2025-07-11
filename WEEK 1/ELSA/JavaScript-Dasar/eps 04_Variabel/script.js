// jadi ini adalah komen

// 1. variabel dengan let
let nama = "Ucup Surucup";

// tampilkan data
console.log(nama);

//kita bah nilai variabel nama
nama = "Otong Surotong";
console.log(nama);

// 2. variabel dengan var
var namaDepan ="Ucup";
console.log(namaDepan);
namaDepan = "Otong";
console.log(namaDepan);

//kelakuan dari let
let namaBelakang = "Surucup";
{
    let namaBelakang = "Surotong";
    console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakuan dari var

var namaTengah = "Keren";
{
    var namaTengah = "Ganteng";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus
contohBaru = "Bala-bala";
{
    gorengan = "Combro";
}
console.log(gorengan);


// 3. const

const TTL = "27 Desember 2006";
console.log(TTL);
// TTL = "27 Desember 2008"; gak boleh dilakukan karena sudah janji konstan
