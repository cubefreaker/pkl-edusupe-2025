let dataString = "data string";
console.log(dataString);

//1. esceping String
let data1 = 'ucup berkata "apa kabar?"';
console.log(data1);
let data2 = "Ucup Berkata \"tetep asyik\"";
console.log(data2);
let data3 = "ucup berjalan-jalan di tepi pantai, \nkerennn"; //fungsi \n untuk mengatur posisi "keren" ada di bawah
console.log(data3);

//2. literal string (template literal string)
let namaDepan = "Otong";
let namaBelakang = "Surotong";
let umur = 7;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);

//lebih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);