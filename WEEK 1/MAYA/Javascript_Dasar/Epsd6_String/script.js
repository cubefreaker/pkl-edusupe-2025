let dataString = "data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'ucup \tberkata "apa kabar dunia?"';
console.log(data1);
let data2 = "otong berkata \"tetap asyikk\"";
console.log(data2);
let data3 = "ucup berjalan-jalan ditepi pantai, \nkereen";
console.log(data3);

// 2. litteral string (template literal string)
let namaDepan = "otong";
let namaBelakang = "surotong";
let umur = 17;
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur; // menjadi masalah
console.log(namaLengkap);

// lebih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);