const users = require("../models/User")

const { User } = require("../../database/models")

const cargarUser =  () => {
    const usuarios = users.findAll();
    usuarios.forEach(async usuario => {
        try {
            const user = await User.create({
                nombreYApellido: usuario.nombreyapellido,
                nombreDeUsuario: usuario.nombreyapellido,
                contraseña: usuario.password,
                email: usuario.email,
                imagen: usuario.imagen
            })
        } catch (error) {
            console.log(error)
        } 
   });
}

cargarUser();
