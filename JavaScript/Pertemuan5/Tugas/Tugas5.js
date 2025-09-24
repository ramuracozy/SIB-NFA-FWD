// Data Produk (minimal 5)
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headset", harga: 800000 },
  { id: 5, nama: "Mouse", harga: 200000 }
];

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];
  console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...id) {
  produkList = produkList.filter(produk => !id.includes(produk.id));
  console.log(`Produk dengan ID ${id.join(", ")} berhasil dihapus.`);
}

// Menampilkan Semua Produk dengan Destructuring
function tampilkanProduk() {
  console.log("Daftar Produk:");
  produkList.forEach(produk => {
    // Destructuring di sini
    const { id, nama, harga } = produk;
    console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
  });
  console.log("=====================");
}

// Contoh Penggunaan
tampilkanProduk();
tambahProduk(6, "Kamera", 8000000);
tampilkanProduk();
hapusProduk(2); 
tampilkanProduk();
