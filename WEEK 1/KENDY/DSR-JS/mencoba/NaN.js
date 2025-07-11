//NaN dan Undefined

//NaN = Not a Number
console.log(`akar dari -1 \t:${Math.sqrt(-1)}`);
console.log(`"ucup" / "otong" :${"ucup" / "otong"}`); //math tidak menggunkaan string
console.log(`"ucup" * "otong" :${"ucup" * "otong"}`); //math tidak menggunkaan string
console.log(`"ucup" + "otong" :${"ucup" + "otong"}`);
console.log(`"ucup" - "otong" :${"ucup" - "otong"}`);

let data = parseInt("123test"); //jika angka ditaruh dibelakang test NaN
console.log(data + 5); //123+5

//undefined - Dia belum tau nilainya
let a; //nilai a blm diisi jadi ouput undefined
console.log(`a = ${a}`);
console.log(Math.sqrt(4)); //menghasilkan
console.log(console.log("test")); //tidak menghasilkan apapun