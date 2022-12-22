const db = require("../../src/database/models")


module.exports = {
    list: (req, res) => {
        const cursos = db.Curso.findAll({
            raw: true,
        })
        const categorias = db.Categoria.findAll({
            raw: true,
        })
        Promise.all([categorias, cursos])
            .then(([cursos, categorias]) => {
                const curso = {
                    count: cursos.length,
                    countByCategory: {
                        Desarrollo: 0,
                        Negocios: 0,
                        FinanzasyContabilidad: 0,
                        Desarrollopersonal: 0,
                        Marketing: 0,
                        Diseño: 0
                    }
                }

                cursos.forEach(producto => {
                    switch (producto.idCategorias) {
                        case 1:
                            curso.countByCategory.Desarrollo++;
                            break;
                        case 2:
                            curso.countByCategory.Negocios++;
                            break;
                        case 3:
                            curso.countByCategory.FinanzasyContabilidad++;
                            break;
                        case 4:
                            curso.countByCategory.Desarrollopersonal++;
                            break;
                        case 5:
                            curso.countByCategory.Marketing++;
                            break;
                        default:
                            curso.countByCategory.Diseño++;
                    }
                })


                return res.json(curso)
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
                let URLimagen = "http://localhost:3023/img/users/" + usuario.imagen
                usuario.imagen = URLimagen
                delete usuario.password
                delete usuario.tipoDeUsuario
                return res.json(usuario)
            })
    }
}