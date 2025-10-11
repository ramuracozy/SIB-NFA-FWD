<?php
// Struktur Kendali 
    $nama = "Budi";
    $totalBelanja = 150000;
    $keterangan = '';

    if ($totalBelanja > 100000) {
        $keterangan = "Selamat, Anda mendapatkan diskon 10%!";
    } elseif ($totalBelanja > 50000) {
        $keterangan = "Selamat, Anda mendapatkan diskon 5%!";
    } else {
        $keterangan = "Terima kasih telah berbelanja di toko kami.";
    }

    echo "Nama Pelanggan: $nama";
    echo "<br>Total Belanja: Rp $totalBelanja";
    echo "<br>Keterangan: $keterangan";
?>