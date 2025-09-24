// without destructing

const angka = [10, 20, 30];

const a = angka[0];
const b = angka[1];
const c = angka[2];

console.log(a, b, c); // 10 20 30

// with destructing
const angka1 = [10, 20, 30];

const [a1, b2, c3] = angka1;
console.log(a1, b2, c3); // 10 20 30

// without destructing object
const user = {
  nama: "John",
  umur: 30,
  kota: "Jakarta",
};
// const name = user.nama;
// const age = user.umur;
// const kota = user.kota;
const { nama, umur, kota } = user;
console.log(nama, umur, kota); // John 30 Jakarta

const siswa = [
    {nama: "Ali", nilai: 75},
    {nama: "Budi", nilai: 85},
    {nama: "Cici", nilai: 96},
];

for (const {nama, nilai,} of siswa) {
    console.log(`${nama}, mendapatkan nilai  ${nilai}`);
}