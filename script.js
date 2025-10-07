// Menggunakan 'const' huruf kecil dan kutip tunggal
// Mengambil elemen tombol dari HTML yang memiliki ID 'sapaButton'
const sapaButton = document.getElementById('sapaButton');

// Menambahkan event listener. Ketika tombol diklik, fungsi di dalamnya akan dijalankan.
sapaButton.addEventListener('click', function() {
  // Menampilkan kotak pesan alert
  alert('Halo! terimakasih sudah berkunjung!');
});
