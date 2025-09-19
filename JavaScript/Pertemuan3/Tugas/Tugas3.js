// Array produk awal
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menampilkan semua produk
function tampilkanProduk() {
  console.log("Daftar Produk:");
  produkToko.forEach(produk => {
    console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`);
  });
  console.log("--------------------------");
}

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok){
  // Membuat ID baru berdasarkan ID terakhir + 1
  let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
  produkToko.push(produkBaru);
  console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// Fungsi untuk menghapus produk 
function hapusProduk(id){
  let index = produkToko.findIndex(produk => produk.id === id);
  if(index !== -1){
    let produkDihapus = produkToko.splice(index, 1);
    console.log(`Produk ${produkDihapus[0].nama} berhasil dihapus.`);
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan.`);
  }
}

// contoh penggunaan fungsi
// menampilkan produk awal
tampilkanProduk();

// Menampilkan produk baru setelah penambahan produk
tambahProduk("Monitor", 1500000, 4);
tampilkanProduk();

// Menampilkan produk setelah penghapusan produk
hapusProduk(2); // Mengahapus produk Mouse
tampilkanProduk();
