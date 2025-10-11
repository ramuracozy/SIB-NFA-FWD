<!DOCTYPE html>
<html lang="en">
<head>
    <title>Tugas PHP Pertemuan 1</title>
</head>
<body>
    <h2>Form Nilai Ujian</h2>
    <form  method="post" action="">
        <label>Nama:</label>
        <input type="text" name="nama" required><br><br>

        <label>Emmail:</label>
        <input type="email" name="email" required><br><br>

        <label>Nilai Ujian:</label>
        <input type="number" name="nilai" required><br><br>
        <input type="submit" name="submit" value="Submit"><br><br>
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        if ($nilai > 70) {
            $status = "Lulus Ujian";
        } else {
            $status = "Remedial Ujian";
        }

        echo "<h3>Hasil Penilaian</h3>";
        echo "Nama: $nama<br>";
        echo "Email: $email<br>";
        echo "Nilai: $nilai<br>";
        echo "Status: <strong>$status</strong>";
    }
    ?>
</body>
</html>