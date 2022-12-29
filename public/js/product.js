const formulario = document.querySelector('#formulario1')

const email = document.querySelector('.email');
let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const password = document.querySelector('.password');

console.log(email)
console.log(password)






formulario.addEventListener('submit', function (e) {

    console.log(formulario.email.value)

    if (!reEmail.test(formulario.email.value)) {
        if (!email.lastElementChild.classList.contains('error1')) {
            email.innerHTML += '<p class="msg-error error1">No se ingresó un email valido!. Tienes que ser un formato de email valido</p>'
        }
        email.lastElementChild.removeAttribute("hidden")
        e.preventDefault();
    }
    else {
        if (email.lastElementChild.classList.contains('error1')) {
            email.lastElementChild.setAttribute("hidden", "hidden")
        }

        fetch('http://localhost:3023/api/users')
            .then(response => response.json())
            .then(usuarios => {
                const emailEmpty = usuarios.users.find(usuarios => usuarios.email == formulario.email.value);
                console.log(emailEmpty)
                e.preventDefault();
                if (emailEmpty == null) {

                    if (!email.lastElementChild.classList.contains('error2')) {
                        email.innerHTML += '<p class="msg-error error2">El mail ingresado no existe en la base de datos. Anda pa alla bobo!!</p>'
                    }
                    email.lastElementChild.removeAttribute("hidden")
                    e.preventDefault();
                }
                else {
                    if (email.lastElementChild.classList.contains('error2')) {
                        email.lastElementChild.setAttribute("hidden", "hidden")
                    }
                }
            })
    }

    


    if (formulario.password.value.length < 8) {
        if (!password.lastElementChild.classList.contains('error1')) {
            password.innerHTML += '<p class="msg-error error1"> No se ingresó una contraseña valida!. Debe tener al menos 8 caracteres</p>'
        }
        password.lastElementChild.removeAttribute("hidden")
        e.preventDefault();
    }
    else {
        if (password.lastElementChild.classList.contains('error1')) {
            password.lastElementChild.setAttribute("hidden", "hidden")
        }
    }

    

});