// Membuat superclass Kendaraan
class Kendaraan {
    constructor(merk, tipe, tahun) {
        this.merk = merk;
        this.tipe = tipe;
        this.tahun = tahun;
    }

    info() {
        return `Merk: ${this.merk}, Tipe: ${this.tipe}, Tahun: ${this.tahun}`;
    }
}

// Membuat subclass Mobil yang mewarisi dari Kendaraan
class Mobil extends Kendaraan {
    constructor(merk, tipe, tahun, jumlahPintu) {
        super(merk, tipe, tahun);
        this.jumlahPintu = jumlahPintu;
    }
    info() {
        return `${super.info()} - Mobil ${this.jumlahPintu} pintu`;
    }
}

// Membuat subclass Motor yang mewarisi dari Kendaraan
class Motor extends Kendaraan {
    constructor(merk, tipe, tahun, jenis) {
        super(merk, tipe, tahun);
        this.jenis = jenis;
    }
    info() {
        return `${super.info()} - Motor jenis ${this.jenis}`;
    }
}

// Membuat class pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} menyewa ${kendaraan.info()}`);
    }
}

// Membuat class rental
class Rental {
    constructor(){
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }
     tampilkanDaftarPelanggan() {
    console.log("\n=== Daftar Pelanggan yang Sedang Menyewa Kendaraan ===");
    this.daftarPelanggan.forEach((p, index) => {
      if (p.kendaraanDisewa) {
        console.log(
          `${index + 1}. Nama: ${p.nama}, Telepon: ${p.nomorTelepon}, Kendaraan: ${p.kendaraanDisewa.info()}`
        );
      }
    });
  }
    
}

// Penggunaan kelas-kelas di atas
let mobil1 = new Mobil("Toyota", "Avanza", 2020, 4);
let motor1 = new Motor("Honda", "Scoopy", 2021, "Skuter");

let pelanggan1 = new Pelanggan("Andi", "08123456789");
let pelanggan2 = new Pelanggan("Budi", "08987654321");

let rental = new Rental();
rental.tambahPelanggan(pelanggan1);
rental.tambahPelanggan(pelanggan2);

pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);
rental.tampilkanDaftarPelanggan();