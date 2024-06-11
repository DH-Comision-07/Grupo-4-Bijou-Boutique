window.addEventListener("load", function () {
    const inputs = document.querySelectorAll(".form-input");
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      inputs.forEach(function (input) {
        input.style.backgroundColor = "white"; 
  
        if (input.name === "name" && input.value.length <= 1) {
          event.preventDefault();
          alert("El nombre del producto debe tener más de 1 caracter.");
          input.style.backgroundColor = "lightblue"; 
        }
  
        if (input.name === "description" && (input.value.length < 10 || input.value.length > 500)) {
          event.preventDefault();
          alert("La descripción debe tener entre 10 y 500 letras.");
          input.style.backgroundColor = "lightblue"; 
        }
  
        if (input.name === "price" && (isNaN(input.value) || parseFloat(input.value) <= 1)) {
          event.preventDefault();
          alert("El precio debe ser mayor a 1.");
          input.style.backgroundColor = "lightblue"; 
        }
      });
    });
  
    inputs.forEach(function (input) {
      input.addEventListener("click", function () {
        input.style.backgroundColor = "lightgrey";
      });
  
      input.addEventListener("mouseout", function () {
        input.style.backgroundColor = "white";
      });
    });
  });
  