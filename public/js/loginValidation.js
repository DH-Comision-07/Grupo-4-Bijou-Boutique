document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("user");
  const pass = document.getElementById("pass");
  const icon = document.getElementById("bx");
  const form = document.getElementById("loginForm");

  if (!emailInput) {
    console.error("Elemento #user no encontrado");
  }
  if (!pass) {
    console.error("Elemento #pass no encontrado");
  }
  if (!icon) {
    console.error("Elemento #bx no encontrado");
  }
  if (!form) {
    console.error("Elemento #loginForm no encontrado");
  }

  if (emailInput && pass && icon && form) {
    emailInput.value = localStorage.getItem("email") || "";

    emailInput.addEventListener("input", () => {
      localStorage.setItem("email", emailInput.value);
    });

    icon.addEventListener("click", () => {
      if (pass.type === "password") {
        pass.type = "text";
        icon.classList.remove("bx-show-alt");
        icon.classList.add("bx-hide");
      } else {
        pass.type = "password";
        icon.classList.add("bx-show-alt");
        icon.classList.remove("bx-hide");
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = emailInput.value;
      const password = pass.value;

      console.log("Email:", email);
      console.log("Password:", password);

      const emailRegex =
        /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;

      if (!emailRegex.test(email)) {
        alert("Email invalido");
        return false;
      }

      if (!passwordRegex.test(password)) {
        alert(
          "La contraseña debe tener al menos 8 caracteres, un número y un caracter especial."
        );
        return false;
      }

      event.target.submit();
    });
  }
});
