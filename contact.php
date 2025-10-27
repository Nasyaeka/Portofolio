<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Format data untuk disimpan
    $data = "Nama: $name\n";
    $data .= "Email: $email\n";
    $data .= "Pesan: $message\n";
    $data .= "Tanggal: " . date("d-m-Y H:i:s") . "\n";
    $data .= "-----------------------------\n";

    // Simpan ke file messages.txt
    $file = "messages.txt";
    if (file_put_contents($file, $data, FILE_APPEND)) {
        echo "<script>alert('Pesan berhasil disimpan!'); window.history.back();</script>";
    } else {
        echo "<script>alert('Gagal menyimpan pesan.'); window.history.back();</script>";
    }
}
?>
