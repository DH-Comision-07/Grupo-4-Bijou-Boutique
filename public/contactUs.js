document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if (nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        event.preventDefault();  
        return;
    }

    if (!email.includes('@')) {
        alert('El email debe incluir un @.');
        event.preventDefault();  
        return;
    }

    if (mensaje.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres.');
        event.preventDefault();  
        return;
    }
    });
});
