// server.js

const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userService.js'); // Asegúrate de que el nombre del archivo sea correcto

const app = express();

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar el formulario de registro
app.get('/register', (req, res) => {
    res.render('register');
});

// Ruta para procesar el formulario de registro
app.post('/register', (req, res) => {
    const { name, surname, username, password, confirmPassword, email, dateOfBirth, address, interests } = req.body;
    // Comprueba que las contraseñas coincidan
    if (password !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden');
    }
    const newUser = {
        name,
        surname,
        username,
        password,
        email,
        dateOfBirth,
        address,
        interests: Array.isArray(interests) ? interests : [interests] // Si solo se selecciona un interés, convierte en array
    };
    userService.addUser(newUser, (err) => {
        if (err) {
            res.status(500).send('Error al registrar el usuario');
        } else {
            res.send('Usuario registrado exitosamente');
        }
    });
});
