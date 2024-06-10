function validateForm(event) {
    const inputs = document.querySelectorAll('.controls');
    event.preventDefault();

    inputs.forEach(function(input) {
        input.style.backgroundColor = 'white';

        if (input.id === 'name') {
            if (input.value.length < 3) {
                alert('El nombre debe tener al menos 3 caracteres.');
                input.style.backgroundColor = 'lightblue';
                return false;
            }
        }

        if (input.id === 'surname') {
            if (input.value.length < 3) {
                alert('El apellido debe tener al menos 3 caracteres.');
                input.style.backgroundColor = 'lightblue';
                return false;
            }
        }

        if (input.id === 'pass') {
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;
            if (!passwordRegex.test(input.value)) {
                alert('La contraseña debe tener al menos 8 caracteres, un número y un caracter especial.');
                input.style.backgroundColor = 'lightblue';
                return false;
            }
        }
    });

    event.target.submit();
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
});
