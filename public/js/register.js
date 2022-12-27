

const formulario = document.querySelector('#formulario1')

const nombre = document.querySelector('.nombre');
const date = document.querySelector('.date');

const email = document.querySelector('.email');
let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const password = document.querySelector('.password');
let rePassword  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

const password2 = document.querySelector('.paswword2');


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

    


    if ((Date.now() - Date.parse(formulario.date.value)) < 567993600000 || formulario.date.value == '') {
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
        
        if (emailEmpty != null) {
            
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
    
    if (!rePassword.test(formulario.password.value)) {
        if(!password.lastElementChild.classList.contains('error1')){
            password.innerHTML += '<p class="msg-error error1"> No se ingresó una contraseña valida!. Debe tener al menos 8 caracteres, letras mayúsculas, minúsculas, un número y un carácter especial.</p>'
        }
        e.preventDefault();
    }
    else{
        if(password.lastElementChild.classList.contains('error1')){
            password.lastElementChild.setAttribute("hidden", "hidden")
        }
    }

    
    if (formulario.password.value != formulario.password2.value) {
        console.log()
        if(!password2.lastElementChild.classList.contains('error1')){
            password2.innerHTML += '<p class="msg-error error1">Las contraseñas no coinciden</p>'
        }
        e.preventDefault();
    }
    else{
        if(password2.lastElementChild.classList.contains('error1')){
            password2.lastElementChild.setAttribute("hidden", "hidden")
        }
    }


    console.log(formulario.imagen.value)
});