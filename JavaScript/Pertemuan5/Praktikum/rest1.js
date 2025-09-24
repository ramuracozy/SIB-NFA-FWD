function jumlahkan(angka){
    return angka.reduce((total, num) => total + num, 0);
}

console.log(jumlahkan(2));