const fetch = require('node-fetch');

const formulario = document.querySelector('#formulario1')

const nombre = document.querySelector('.nombre');
const email = document.querySelector('.email');
fetch('http://localhost:3023/api/users')
    .then(response => response.json())
    .then(usuarios => {
        console.log(usuarios);
    })

formulario.addEventListener('submit', function (e) {
    if (formulario.nombre.value.length < 2) {

        nombre.innerHTML += '<p class="msg-error">No se ingresó un nombre válido!. Tiene que tener al menos 2 caracteres</p>'
        e.preventDefault();
    }

    if (formulario.email.value.length < 2) {
        alert('No se ingresó un nombre de Usuario válido!');
        e.preventDefault();
    }
    else if ((Date.now() - Date.parse(formulario.date.value)) < 567993600000) {
        alert('Tienes que ser mayor de edad para registrarse');
        e.preventDefault();
    }

    else if (tiene_numeros(formulario.password.value) == 0 || tiene_letras(formulario.password.value) == 0 || formulario.password.value.length < 8) {
        alert('La contraseña debe contener dígitos  y letras. Su longitud debe ser de mas de 8 caracteres');
        e.preventDefault();
        let password = formulario.password.value;
        console.log(formulario.password.value);
    }

    else if (formulario.password.value != formulario.password2.value) {
        alert('Las contraseñas deben coincidir');
        e.preventDefault();
    }
    else {
        alert('Se ha registrado correctamente!!')
    }


    function tiene_numeros(texto) {
        var numeros = "0123456789";
        for (i = 0; i < texto.length; i++) {
            if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    }

    function tiene_letras(texto) {
        var letras = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
        texto = texto.toLowerCase();
        for (i = 0; i < texto.length; i++) {
            if (letras.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    }
});