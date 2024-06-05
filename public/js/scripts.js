function validateForm(event) {
    event.preventDefault();
}

const name = document.getElementById('name').value;
const surname = document.getElementById('surname').value;
const password = document.getElementById('pass').value;
const email = document.getElementById('mail').value;


const nameSurnameRegex = /^.{3,}$/;
const passwordRegex = /^(?=.[0-9])(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;

if (!nameSurnameRegex.test(name)) {
    alert('El nombre debe tener al menos 3 caracteres.');
    return false;
}

if (!nameSurnameRegex.test(surname)) {
    alert('El apellido debe tener al menos 3 caracteres.');
    return false;
}

if (!passwordRegex.test(password)) {
    alert('La contraseña debe tener al menos 8 caracteres, un número y un caracter especial.');
    return false;
}

event.target.submit();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
});
