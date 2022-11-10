const users = require("../models/User")

const {User} = require("../../database/models")

module.exports = () => {
    const usuarios = users.findAll();
   usuarios.forEach(async usuario => {
        try {
            const user = await User.create({
                nombreyapellido: usuario.nombreyapellido,
                password: usuario.password,
                email: usuario.email,
                imagen: usuario.imagen
            })
        } catch (error) {
            console.log(error)
        }
        
   });

  
}

