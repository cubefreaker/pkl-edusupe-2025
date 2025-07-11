// operasi string

let dataString = "abcdef";
let dataChar = dataString.charAt(0);
console.log(`characher pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`characher pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`characher pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`characher pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`characher pada index 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`characher pada index 5 = ${dataChar}`);

// 2. menyambung string
let namaDepan = "ucup";
let namaBelakang = "surucup";

let namaLengkap = namaDepan.concat(' ', namaBelakang,' si keren');
console.log(namaLengkap);

// 3. mengambil index
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('c'));
console.log(namaLengkap.indexOf('u'));
console.log(namaLengkap.indexOf('U'));

// 4. SUBSTRING
let namaLengkap_5_12 = namaLengkap.substring(5,12);
console.log(namaLengkap_5_12);
console.log(namaLengkap.substring(12,5));

// 5. slice 
console.log(namaLengkap.slice(5,12));
console.log(namaLengkap.slice(12,5));

// 6. replace
namaLengkap = namaLengkap.replace('ucup surucup', 'otong surotong');
console.log(namaLengkap);

// 7. tolower 
console.log(namaLengkap.toLowerCase());

// 8. uppercase 
console.log(namaLengkap.toUpperCase());

// 9. extract data  number dari  string
let dataString2 = '10';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = '10.125';
console.log(typeof dataString3);
let dataFloat = parseInt(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);



