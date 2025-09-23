class Kendaraan{
    constructor(merk, tahun){
        if(this.constructor === Kendaraan){
            throw new Error("Abstract class 'Kendaraan' cannot be instantiated directly.");
        }
        this.merk = merk;
        this.tahun = tahun;
    }
    deskripsi(){
        throw new Error("Method 'deskripsi()' must be implemented.");
    }
}

class Mobil extends Kendaraan{
    constructor(merk, tahun, kecepatan){
        super(merk, tahun);
        this.kecepatan = kecepatan;
    }
    deskripsi(){
        return `Mobil ${this.merk} tahun ${this.tahun} dengan kecepatan ${this.kecepatan} km/jam.`;
    }
}

const mobilSaya = new Mobil("Toyota", 2020, 180);
console.log(mobilSaya.deskripsi()); // Output: Mobil Toyota tahun 2020 dengan kecepatan 180 km/jam.