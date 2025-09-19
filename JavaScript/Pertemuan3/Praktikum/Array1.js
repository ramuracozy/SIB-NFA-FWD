let buah = ["Pepaya", "Mangga", "Jambu"]; // Deklarasi array buah
buah[2] = "Durian";
buah.length = 2;
let angka = new Array(10, 20, 30); // Deklarasi menggunakan new array
let arrKosong = new Array(5);
let angka1 = [1, 2, 3];
// Panjang data, bukan data atau valuenya
for (let i = 0; i < arrKosong.length; i++) {
  arrKosong[i] = i + 1;
}
Array.prototype.tampilkan = function () {
    console.log(this.join(" - "));
}
buah.push("Semangka");
console.log(buah);
buah.pop();
console.log(buah);
buah.unshift("Semangka");
console.log(buah);
buah.shift();
console.log(buah);

let warna = ["Merah", "Biru", "Hijau"];
warna.tampilkan();
console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);

console.log(arrKosong);
console.log(arrKosong[0]);
console.log(angka);
console.log(buah.length);