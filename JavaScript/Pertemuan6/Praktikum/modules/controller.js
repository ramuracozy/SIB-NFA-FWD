import { ProdukModel } from "./model.js";
import { ProdukView } from "./view.js";

export class ProdukController {
    constructor(view) {
        this.model = new ProdukModel();
        this.view = view;
    }
    tambahProduk(namaProduk) {
        if (namaProduk.trim() !== "") {
            this.model.tambahProduk(namaProduk);
            this.view.tampilkanProduk(this.model.getProduk(), this);
        }
    }

    hapusProduk(namaProduk) {
        this.model.hapusProduk(namaProduk);
        this.view.tampilkanProduk(this.model.getProduk(), this);
    }
}