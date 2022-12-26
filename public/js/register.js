

const formulario = document.querySelector('#formulario1')

const nombre = document.querySelector('.nombre');
const date = document.querySelector('.date');

const email = document.querySelector('.email');
let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

formulario.addEventListener('submit', function (e) {
    if (formulario.nombre.value.length < 2 ) {
        console.log(nombre.lastElementChild)
        if(!nombre.lastElementChild.classList.contains('msg-error')){
            nombre.innerHTML += '<p class="msg-error">No se ingresó un nombre válido!. Tiene que tener al menos 2 caracteres</p>'
        }
        e.preventDefault();
    }
    else{
        if(nombre.lastElementChild.classList.contains('msg-error')){
            nombre.lastElementChild.setAttribute("hidden", "hidden")
        }
    }

    if ((Date.now() - Date.parse(formulario.date.value)) < 567993600000) {
        if(!date.lastElementChild.classList.contains('msg-error')){
            date.innerHTML += '<p class="msg-error">No se ingresó una fecha valida!. Tienes que ser mayor de edad</p>'
        }
        e.preventDefault();
    }
    else{
        if(date.lastElementChild.classList.contains('msg-error')){
            date.lastElementChild.setAttribute("hidden", "hidden")
        }
    }

    if (!reEmail.test(formulario.email.value)) {
        if(!email.lastElementChild.classList.contains('error1')){
            email.innerHTML += '<p class="msg-error error1">No se ingresó un email valido!. Tienes que ser un formato de email valido</p>'
        }
        e.preventDefault();
    }
    else{
        if(email.lastElementChild.classList.contains('error1')){
            email.lastElementChild.setAttribute("hidden", "hidden")
        }
    }

    fetch('http://localhost:3023/api/users')
    .then(response => response.json())
    .then(usuarios => {
        const emailEmpty = usuarios.users.find(usuarios => usuarios.email == formulario.email.value);
        console.log(emailEmpty)
        if (emailEmpty != null) {
            console.log(email.lastElementChild)
            if(!email.lastElementChild.classList.contains('error2')){
                email.innerHTML += '<p class="msg-error error2">Ya existe un usuario con ese email.</p>'
            }
            e.preventDefault();
        }
        else{
            if(email.lastElementChild.classList.contains('error2')){
                email.lastElementChild.setAttribute("hidden", "hidden")
            }
        }
    })

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