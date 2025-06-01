(function(){
      const hardcodedUsername = "Admin"; // Username
      const hardcodedPassword = "Rahasia"; // password

      const form = document.getElementById('loginForm');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const message = document.getElementById('message');

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value;

        if (enteredUsername === hardcodedUsername && enteredPassword === hardcodedPassword) {
          message.textContent = "Login Berhasil.";
          message.className = "mt-6 text-center font-semibold text-sm text-green-400";
          usernameInput.value = "";
          passwordInput.value = "";
          window.location.href = "lks2025.html";
          alert("Login Berhasil")

        } else {
          message.textContent = "Maaf Password Atau Username Salah";
          message.className = "mt-6 text-center font-semibold text-sm text-red-500";
          passwordInput.value = "";
          passwordInput.focus();
        }
      });
    })();