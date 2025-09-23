// const _harga = Symbol("harga");
class Produk {
    #harga;
    constructor(nama, harga) {
        this.nama = nama;
        // this[_harga] = harga;
        this.#harga = harga;
    }
    getHarga() {
        // return this[_harga];
        return this.#harga;
    }
    setHarga(hargaBaru) {
        if (hargaBaru > 0) {
            // this[_harga] = hargaBaru;
            this.#harga = hargaBaru;
        } else {
            console.log("Harga harus lebih dari 0");
        }
    }
}

let produk1 = new Produk("Laptop", 15000000);
console.log(produk1.nama); // Output: Laptop
console.log(produk1.getHarga()); // Output: 15000000
console.log(produk1._harga); // Output: undefined (tidak bisa diakses langsung)