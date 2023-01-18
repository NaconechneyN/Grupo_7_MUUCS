const db = require("../../src/database/models")

module.exports ={
    list: async (req, res) => {
        try {
            const users = await db.Usuario.findAll()

            const objResponse = {
                status: 200,
                count: users.length,
                users: users.map(user => ({
                    id: user.idUsuarios,
                    name: user.nombreYApellido,
                    email: user.email,
                    detail: `http://${req.get('host')}/api/users/${user.idUsuarios}`
                }))
            }
            res.json(objResponse)
        } catch(err) {
            const objResponse = {
                status: 500,
                err: err
            }
            res.json(objResponse)
        }
    },
    detail: async (req, res) => {
        try {
            let user = await  db.Usuario.findByPk(req.params.id)
            
            if (user) {
                user = user.dataValues
                const objResponse = {
                    status: 200,
                    id: user.idUsuarios,
                    name: user.nombreYApellido,
                    email: user.email,
                    address: user.domicilio,
                    image: `http://${req.get('host')}/img/users/${user.imagen}`,
                    dob: user.fechaDeNacimiento //data of birth
                }
                res.json(objResponse)
                return
            }
            const objResponse = {
                status: 404,
                err: err
            }
            res.json(objResponse)
        } catch(err) {
            const objResponse = {
                status: 500,
                err: err
            }
            res.json(objResponse)
        }
    }
}

