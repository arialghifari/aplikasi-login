// mendapatkan modal element dari DOM
const modalElement = document.querySelector("#modal");
const modalCloseButton = document.querySelector("#modal button");

// fungsi untuk menampilkan modal
let timer;
function showPopUp() {
  modalElement.classList.add("display");

  // menyembunyikan modal ketika klik close
  modalCloseButton.addEventListener("click", function () {
    clearTimeout(timer);
    modalElement.classList.remove("display");
  });

  // menyembunyikan modal setelah 3 detik
  timer = setTimeout(function () {
    modalElement.classList.remove("display");
  }, 10000);
}

// pindah ke halaman home
function goToHome() {
  location.href = "./home.html";
}

// pindah ke halaman login
function goToLogin() {
  location.href = "./index.html";
}
