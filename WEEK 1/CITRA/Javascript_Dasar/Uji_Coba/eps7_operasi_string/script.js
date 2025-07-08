//  operasi string

// char at
let dataString = "abcde";
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index 5 = ${dataChar}`); // tidak ada

// 2. menyambung string 
let namaDepan = "Citra";
let namaBelakang = "Amellia";

let namaLengkap = namaDepan.concat(' ', namaBelakang, ' si cantik');
console.log(namaLengkap);

// 3. mengambil index ( kemunculan pertama )
console.log(namaLengkap.indexOf('i'));
console.log(namaLengkap.indexOf('c'));
console.log(namaLengkap.indexOf('C'));

// 4. Substring
let namaLengkap_5_12 = namaLengkap.substring(5,10);
console.log(namaLengkap_5_12);
console.log(namaLengkap.substring(10,5));

//  5. slice
console.log(namaLengkap.slice(5,10));
console.log(namaLengkap.slice(10,5)); // menjadi kosong

// 6. replace 
namaLengkap = namaLengkap.replace('Citra Amellia', 'Rizdha Adel');
console.log(namaLengkap);

// 7. tolower
console.log(namaLengkap.toLowerCase());

// 8. uppercase
console.log(namaLengkap.toUpperCase());

// 9. extract data number
let dataString2 = '10.5';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = '10.125'
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);
