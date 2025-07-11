// numbers - 64-bit

let nilai_int = 10; // integer - nilai bilangan bulat
let nilai_float = 10.123; //float - nilai bilangan desimal
let nilai_big_int = 12345678998765432n; //bigInt


// menggunakan data ini gimana?

let angka = 5.678;

let angka_int = parseInt(angka);
console.log(angka_int);

let angka_2 = 10.98;
let angka_2_float = parseFloat(angka_2);
console.log(angka_2_float);

// merubah string - regex
let data = "10.98";
console.log(data);
console.log(parseInt(data));
console.log(parseFloat(data));

// contoh
let pembelian = "10000";
let pajak = 1200;
let bayar = parseInt(pembelian) + pajak;
console.log(bayar);

