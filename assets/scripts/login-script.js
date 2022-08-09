/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// Membuat variabel untuk setiap element view
const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");
const togglePasswordElement = document.querySelector("#togglePassword");

// Membuat variabel untuk menyimpan informasi email dan password
const expectedEmail = "admin@dicoding.com";
const expectedPassword = "superpassword";

// Menambahkan aksi ketika klik tombol show password
togglePasswordElement.addEventListener("click", function () {
  if (togglePasswordElement.textContent == "Show Password") {
    // Ketika Show Password di klik maka ubah input type ke text
    inputPasswordElement.type = "text";
    togglePasswordElement.textContent = "Hide Password";
  } else {
    // Namun ketika Hide Password di klik maka ubah input type ke password
    inputPasswordElement.type = "password";
    togglePasswordElement.textContent = "Show Password";
  }
});

// Menambahkan aksi submit form
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  // TODO 1 : Mendapatkan input email dan password pengguna dari form.
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* 
    TODO 2 : Buat Logika perbandingan dengan kondisi:
    Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword,
    panggil fungsi goToHome(). Jika tidak, maka panggil fungsi showPopUp().
  */
  if (email === expectedEmail && password === expectedPassword) {
    // Jika sesuai maka program akan berpindah ke halaman home
    goToHome();
  } else {
    // Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah
    showPopUp();
  }
});
