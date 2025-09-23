class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}
// child class pertama
 class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year); // memanggil constructor dari kelas induk
        this.doors = doors; 
    }
    getCarInfo() {
        return `${this.getInfo()} - ${this.doors} doors`;
    }
 }

// child class kedua
 class Motorcycle extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year); // memanggil constructor dari kelas induk
        this.type = type;
    }
    getMotorcycleInfo() {
        return `${this.getInfo()} - Type: ${this.type}`;
    }
 }

 let myCar = new Car("Toyota", "Corolla", 2002, 4);
 console.log(myCar.getCarInfo()); // Output: Toyota Corolla (2002) - 4 doors

 let myMotorcycle = new Motorcycle("Honda", "CBR600RR", 2020, "Sport");
 console.log(myMotorcycle.getMotorcycleInfo()); // Output: Honda CBR600RR (2020) - Type: Sport