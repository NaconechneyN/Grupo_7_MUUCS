const db = require("../../src/database/models")


module.exports = {
    list: async (req, res) => {
        try {
            const cursos = await db.Curso.findAll()

            const queryCategorias = `SELECT CA.nombre as "name",
                                  count(CA.nombre) as "count"     
                            FROM cursos AS CU
                            JOIN categorias AS CA
                            ON CU.idCategorias = CA.idCategorias
                            GROUP BY CU.idCategorias;`
            const countByCategory = await db.sequelize.query(queryCategorias)

            const queryTiposDeEnsenianza = `SELECT TE.nombre as "name",
                                                   count(TE.nombre) as "count"     
                                            FROM cursos AS CU
                                            JOIN tipodeensenianza AS TE
                                            ON CU.idtipoDeEnsenianza = TE.idtipoDeEnsenianza
                                            GROUP BY CU.idCategorias;`
            const countByTipoDeEnsenianza = await db.sequelize.query(queryTiposDeEnsenianza)
            
            const objResponse = {
                count: cursos.length,
                countByCategory: countByCategory[0],
                countByTipoDeEnsenianza: countByTipoDeEnsenianza[0],
                products: cursos.map(curso => ({
                    status: 200,
                    id: curso.idCursos,
                    name: curso.titulo,
                    description: curso.descripcion,
                    descriptionQA: curso.descripcionQueAprenderas,
                    certification: curso.certificacion,
                    price: curso.precio,
                    duration: curso.duracion,
                    valoration: curso.valoration,
                    idUser: curso.idUsuarios,
                    detail: `http://${req.get('host')}/api/products/${curso.idCursos}`,
                    image: `http://${req.get('host')}/img/products/${curso.imagen}`
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
            let curso = await db.Curso.findByPk(req.params.id)
            
            if (curso) {
                curso = curso.dataValues

                const categoria = await db.Categoria.findByPk(curso.idCategorias)
                const tipoDeEnsenianza = await db.TipoDeEnsenianza.findByPk(curso.idtipoDeEnsenianza)

                const objResponse = {
                    status: 200,
                    id: curso.idCursos,
                    name: curso.titulo,
                    description: curso.descripcion,
                    descriptionQA: curso.descripcionQueAprenderas,
                    certification: curso.certificacion,
                    image: `http://${req.get('host')}/img/products/${curso.imagen}`,
                    price: curso.precio,
                    duration: curso.duracion,
                    idUser: curso.idUsuarios,
                    valoration: curso.valoration,
                    category: categoria.dataValues,
                    tipoDeEnsenianza: tipoDeEnsenianza.dataValues
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