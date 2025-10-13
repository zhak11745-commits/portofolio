document.addEventListener('DOMContentLoaded', () => {
  // DOM refs (Pastikan semua ID ini ada di index.html)
  const valueInput = document.getElementById("value");
  const fromSelect = document.getElementById("from"); // SELECT DARI
  const toSelect = document.getElementById("to");     // SELECT KE
  const resultValue = document.getElementById("result-value");
  // ... (referensi DOM lainnya)
  const historyList = document.getElementById("history-list");
  const tableBody = document.querySelector("#conversion-table tbody");
  const themeToggle = document.getElementById("theme-toggle");

  if (!valueInput || !fromSelect || !toSelect || !resultValue || !tableBody) {
    console.error('Elemen penting tidak ditemukan — periksa index.html');
    return; // Program berhenti jika ada elemen HTML yang hilang
  }
  
  // Objek unit SUDAH BENAR
  const UNITS = {
    C: { name: 'Celsius', toBase: val => val, fromBase: val => val },
    F: { name: 'Fahrenheit', toBase: val => (val - 32) * 5 / 9, fromBase: val => (val * 9 / 5) + 32 },
    K: { name: 'Kelvin', toBase: val => val - 273.15, fromBase: val => val + 273.15 }
  };

  // ... (Fungsi formatNumber, convertAndRender, dan renderTable SUDAH BENAR) ...

  function populateSelects() {
    // Fungsi yang mengisi dropdown
    if (fromSelect.options.length > 0) return;
    Object.keys(UNITS).forEach(k => {
      // Membuat opsi untuk dropdown 'Dari'
      const o1 = document.createElement('option'); o1.value = k; o1.text = ${k} (${UNITS[k].name}); fromSelect.add(o1);
      // Membuat opsi untuk dropdown 'Ke'
      const o2 = document.createElement('option'); o2.value = k; o2.text = ${k} (${UNITS[k].name}); toSelect.add(o2);
    });
    // Default konversi C ke F
    fromSelect.value = 'C';
    toSelect.value = 'F';
  }

  // ... (Bagian Event Listeners lainnya SUDAH BENAR) ...

  // Inisialisasi: Poin penting! Pastikan fungsi ini dipanggil
  populateSelects();
  if (valueInput.value === '') valueInput.value = '30';
  convertAndRender();
});
