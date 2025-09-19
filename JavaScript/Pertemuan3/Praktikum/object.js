let person = {
    name: "Budi",
    age: 25,
    city: "Jakarta"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
console.log(person);