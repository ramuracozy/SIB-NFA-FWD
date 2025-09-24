import users from "./data.js";

// Untuk melihat atau menampilkan data
const index = () => {
    console.log('Daftar User:');
    users.map((user, idx) => {
        console.log(`${idx + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}`);
    });
}

// Untuk menambahkan data (store)
const store = (newUser) => {
    users.push(newUser);
    console.log('Data user berhasil ditambahkan.', newUser);
}

// Untuk Menghapus data (destroy)
const destroy = () => {
    if (users.length > 0) {
        const deletedUser = users.pop();
        console.log('Data user berhasil dihapus.', deletedUser);
    } else {
        console.log('Tidak ada data user untuk dihapus.');
    }
}

export {index, store, destroy};