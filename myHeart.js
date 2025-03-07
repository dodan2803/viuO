let attempt = 0;
const correctPassword = "convanlinh";
const passwordField = document.getElementById("password");
const togglePasswordIcon = document.querySelector(".toggle-password");
const overlay = document.getElementById("overlay");

function checkPassword() {
    const passwordInput = passwordField.value;

    if (passwordInput === correctPassword) {
        window.location.href = "menu.html"; // Chuyển đến trang khác khi đúng mật khẩu
        attempt = 0;
    } else {
        attempt++;
        if (attempt >= 3) {
            document.getElementById("hint").style.visibility = "visible";
        }
        alert("The password you entered is incorrect.");
    }
}

function togglePassword() {
    if (passwordField.type === "password") {
        passwordField.type = "text"; // Hiển thị mật khẩu
        togglePasswordIcon.textContent = "🙈"; // Đổi biểu tượng thành mắt đóng
    } else {
        passwordField.type = "password"; // Ẩn mật khẩu
        togglePasswordIcon.textContent = "👁️"; // Đổi biểu tượng thành mắt mở
    }
}