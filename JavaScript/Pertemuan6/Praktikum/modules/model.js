export class ProdukModel {
    constructor() {
        this.produkList = [];
    }
    // fungsi untuk menambah produk
    tambahProduk(nama) {
        this.produkList.push(nama);
    }
    // fungsi menghapus produk
    hapusProduk(namaProduk) {
        this.produkList = this.produkList.filter(produk => produk !== namaProduk);
    }
    // untuk melihat daftar produk
    getProduk() {
        return this.produkList;
    }
} 