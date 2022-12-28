const db = require("../../src/database/models")

module.exports ={
    list: (req, res) => {
        db.Usuario.findAll({
            raw: true,
            
        })
        .then((usuarios) => {
            const usuario = {
                count : usuarios.length,
                users : []
            }
            usuarios.forEach(user => {
                let users = {
                    id : user.idUsuarios,
                    name : user.nombreYApellido,
                    email : user.email,
                    detail : 'http://localhost:3023/api/users/'+user.idUsuarios
                }
                usuario.users.push(users)
            })
            return res.json(usuario)
        })
    },
    detail: (req, res) => {
        db.Usuario.findAll({
            raw: true,
            where: {
                idUsuarios: req.params.id 
            }
        })
        .then((usuarios) => {
            let [usuario] = usuarios
            let URLimagen = "http://localhost:3023/img/users/"+usuario.imagen
            usuario.imagen = URLimagen
            delete usuario.password
            delete usuario.tipoDeUsuario
            return res.json(usuario)
        })  
    }
}

