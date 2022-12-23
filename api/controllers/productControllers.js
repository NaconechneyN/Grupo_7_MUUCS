const db = require("../../src/database/models")


module.exports = {
    list: (req, res) => {
        const cursos = db.Curso.findAll({
            raw: true,
        })
        const categorias = db.Categoria.findAll({
            raw: true,
        })
        Promise.all([cursos, categorias])
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
                    },
                    products:[]
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
                    let users = {
                        id : producto.idCursos,
                        name : producto.titulo,
                        description : producto.descripcion,
                        detail : 'http://localhost:3023/api/products/'+producto.idCursos
                    }
                    curso.products.push(users)
                })
                console.log(cursos)
                return res.json(curso)
            })
    },
    detail: (req, res) => {
        const cursos = db.Curso.findAll({
            raw: true,
            where: {
                idCursos: req.params.id 
            }
        })
        const categorias = db.Categoria.findAll({
            raw: true,
        })
        const tiposEnsenianzas = db.TipoDeEnsenianza.findAll({
            raw: true,
        })
        Promise.all([cursos, categorias, tiposEnsenianzas])
            .then(([cursos, categorias, tiposEnsenianzas]) => {
                const [curso] = cursos
                
                const tiposDeEnsenianza = tiposEnsenianzas.find((tiposDeEnsenianza) => tiposDeEnsenianza.idtipoDeEnsenianza == curso.idtipoDeEnsenianza)
                
                
                
                return res.json(cursos)
            })
    }
}