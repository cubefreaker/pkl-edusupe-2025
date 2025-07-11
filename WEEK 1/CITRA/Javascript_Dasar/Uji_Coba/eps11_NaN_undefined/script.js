// NaN dan Undefined

// NaN = Not a Number
console.log(`akar dari -1 :${Math.sqrt(-1)}`);
console.log(`"citra" / "amellia" :${ "citra" / "amellia" }`);
console.log(`"citra" * "amellia" :${ "citra" * "amellia" }`);
console.log(`"citra" + "amellia" :${ "citra" + "amellia" }`);
console.log(`"citra" - "amellia" :${ "citra" - "amellia" }`);

let data = parseInt("test123");
console.log(data + 5); // NaN ini tidak bisa dioperasikan lagi

// Undefined - Dia belum tau nilainya
let a;
console.log(`a = ${a}`);
console.log(Math.sqrt(4));
console.log(console.log("test"));