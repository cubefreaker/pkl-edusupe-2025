let dataString = "dataString";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \t \b \f)

let data1 = 'ucup berkata \t"apa kabar dunia?"';
console.log(data1);
let data2 = "ucup berkata\"tetap asyiik\"";
console.log(data2);
let data3 = "ucup berjalan-jalan ditepi , \nkereennn";
console.log(data3);

// 2. literan string (teamplete literal string)

let namaDepan = "Otong";
let namaBelakang = "Surotong";
let umur = 7;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang; // menjadi masalah
console.log(namaLengkap);

// lebih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);
