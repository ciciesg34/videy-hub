// exit-redirect.js
var smartUrl = "https://your-smarturl-link.com";

// Tambah entri history untuk deteksi tombol back
history.pushState(null, null, location.href);

// Saat tombol kembali ditekan
window.addEventListener("popstate", function () {
  window.location.href = smartUrl;
});

// Saat user keluar dari halaman (menutup/tab swipe)
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === 'hidden') {
    setTimeout(function () {
      window.location.href = smartUrl;
    }, 300);
  }
});