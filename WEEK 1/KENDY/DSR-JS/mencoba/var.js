// jadi ini dalah komen, jadi bebas aja\

//1. Variabel dengan let
let nama = "ucup surucup";

//tampilkan data
console.log(nama);

//ubah nilai variabel
nama = "otong surotong";
console.log(nama);

//2. variabel dengan var
var namaDepan = "ucup";
console.log(namaDepan);
namaDepan = "Otong";

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
    console.log(namaTengah)
}
console.log(namaTengah);

//kasus khusus tanpa keyword akan jadi var
gorengan = "Bala-bala";
{
    gorengan = "combro";
}
console.log(gorengan);

//3. const
const TTL = "10 MARET 2025";
console.log(TTL);
//TTL = "11 Maret 2026"; tidak boleh dilakukan karena sudah jadi konstan
