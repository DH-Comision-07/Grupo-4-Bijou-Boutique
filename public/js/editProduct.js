window.addEventListener("load", function () {
    let nameInput = document.querySelector("#name");
  
    nameInput.addEventListener("click", function () {
      nameInput.style.backgroundColor = "lightgrey";
    });
  
    nameInput.addEventListener("mouseout", function () {
      nameInput.style.backgroundColor = "white";
    });
  });
  