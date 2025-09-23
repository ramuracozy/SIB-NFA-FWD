function Person (name, age, city) {
    // dekalarasi constructor ditandai dengan this
    this.name = name;
    this.age = age;
    this.city = city;
}

// dan dipanggil dengan keyword new
let person1 = new Person("Alice", 30, "Jakarta");
let person2 = new Person("Bob", 25, "Bandung");

console.log(person1);
console.log(person2);