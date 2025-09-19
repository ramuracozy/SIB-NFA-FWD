let angka = [10, 20, 30, 40, 50];

// loop while
let i = 0;
while (i < angka.length) {
    console.log(angka[i]);
    i++;
}

// loop foreach
angka.forEach(function (item, index) {
    console.log(`Index ${index} : ${item}`);
});
// loop map
let angkaBaru = angka.map(num => num);{
    console.log(angkaBaru);
    // filter
    let angkaGanjil = angka.filter(num => num % 2 !== 0);
    console.log(angkaGanjil);
    // reduce
    let total = angka.reduce((acc, num) => acc + num, 0);
    console.log(total);
    // for of
    for (let item of angka) {
        console.log(item);
    }
};