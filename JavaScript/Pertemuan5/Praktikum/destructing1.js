const produkList = [
    { nama: "laptop", harga: 15000000, stok: 5 },
    { nama: "handphone", harga: 5000000, stok: 10 },
    { nama: "tablet", harga: 3000000, stok: 7 },
];

function tampilkanProduk({ nama, harga, stok }) {
    console.log(`Nama Produk: ${nama}`);
    console.log(`Harga produk: Rp${harga}`);
    console.log(`Stok produk: ${stok}`);
    console.log('-------------------');
}

const [produk1, produk2, produk3] = produkList;
console.log("Detail Produk 1");
tampilkanProduk(produk1);
console.log("Detail Produk 2");
tampilkanProduk(produk2);
console.log("Detail Produk 3");
tampilkanProduk(produk3);