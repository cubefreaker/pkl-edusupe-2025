//OPerator Logika
//AND, OR, NOT

let data_bool = true;
console.log(data_bool);


//1.NOT
console.log(!data_bool);
console.log(!!data_bool);
console.log(!5);
console.log(!0);

//2. OR -> operasi abtara 2 variabel boolean
//A         true false flase false
//B         true false true false
//hasil     true true true false  

console.log(`true || true, Hasil = ${true || true}`);
console.log(`true || false, Hasil = ${true || false}`);
console.log(`false || true, Hasil = ${false || true}`);
console.log(`false || false, Hasil = ${false || false}`);

let makan = true;
let minum = true;

let sudah_menyantap = makan || minum;
console.log(`sudah menyantap = ${sudah_menyantap}`);

//3. AND -> && (operasi antara dua variabel boolena)
//A         true false flase false
//B         true false true false
//hasil     true false false false  sifatnya seperti perkalian yg dikali 0

console.log(`true && true, Hasil = ${true && true}`);
console.log(`true && false, Hasil = ${true && false}`);
console.log(`false && true, Hasil = ${false && true}`);
console.log(`false && false, Hasil = ${false && false}`);

makan = false;
minum = true;

let sudah_makmin = makan && minum;
console.log(`sudah makan dan minum = ${sudah_makmin}`);