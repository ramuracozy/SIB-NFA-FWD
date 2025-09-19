let angka1 = [1, 2, 3];
let angka2 = [4, 5, 6];

console.log(angka1.sort());
console.log(angka2.reverse());

console.log(angka1.indexOf(2));

console.log(angka1.lastIndexOf(3));
let hasilGabung = angka1.concat(angka2);
console.log(hasilGabung);

let teks = angka1.join("-");
console.log(teks);

let potongan = angka1.slice(1, 3);
console.log(potongan);

angka1.splice(1, 1, 10, 20);
console.log(angka1);