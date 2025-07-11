let dataString = "data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'Adel berkata\t "Apa kabar dunia?"';
console.log(data1);
let data2 = "Amel berkata \"Alhamdulillah baikk\"";
console.log(data2);
let data3 = "Rere berjalan-jalan di tepi pantai, \nasik bangeet";
console.log(data3);

//  2. literal string (template literal string)
let namaDepan = "Citra";
let namaBelakang = "Amellia";
let umur = 7;

let namaLengkap = namaDepan +" "+namaBelakang + " " + umur; // cara yang ribet dan salah
console.log(namaLengkap);

// cara yg lebih elegan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur} tahun`;
console.log(biodata);