import { index, store, destroy } from './controller.js';

// Menampilkan data
index();

// Menambahkan data minimal 2 user
store({ nama: "Kafi" , umur: 29, alamat: "Karawang" });
store({ nama: "Lala" , umur: 30, alamat: "Lampung" });

// Menampilkan data user setelah penambahan 2 user
console.log('\nSetelah penambahan 2 user:');
index();

// Menghapus data user terakhir
destroy();

// Menampilkan keseluruhan data user setelah penghapusan 1 user terakhir
console.log('\nSetelah menghapus data:');
index();
