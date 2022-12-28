const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
const  {  v4 : uuidv4  }  =  require ( 'uuid' ) 

const db = require("../database/models")
const { Op } = require("sequelize")

//const db = require("../../database/models") 

const productController = {
    productList: (req, res) => {
        db.Curso.findAll({
            raw: true
        })
            .then((cursos) => {
                console.log(cursos)
                res.render("productList", { cursos: cursos, titulo: "listado de producto", dueño: 0 })
            })

    },
    productListCarrito: (req, res) => {


        const courses = carrito.findByPk(req.body.idCarrito).producto

        res.render("productCart", { cursos: courses, titulo: "Carrito de producto" })
    }
    ,
    productDetail: (req, res) => {
        db.Curso.findAll({
            raw: true,
            where: {
                idCursos: req.params.id,

            }
        })
            .then((curso) => {
                console.log(curso)
                res.render("productCart", { cursos: curso, titulo: "Carrito de producto" })
            })
        /*const id = req.params.id
        const courseItem = product.findByPk(id)

        res.render("productDetail", { nombre: courseItem, titulo: "detalle de producto" })*/
    },
    productMiList: (req, res) => {
        console.log(req.session.usuarioLogueado)

        db.Curso.findAll({
            raw: true,
            where: {

                idUsuarios: req.session.usuarioLogueado.idUsuarios,

            }
        })
            .then((cursos) => {
                console.log(cursos)
                res.render("productList", { cursos: cursos, titulo: "listado de producto", dueño: 1 })
            })
            .catch(error => {
                console.error('función enRechazo invocada: ', error)

            })



        const courses = product.filterByField("dueño", req.session.usuarioLogueado.nombreyapellido)
        res.render("productList", { cursos: courses, titulo: "listado de producto" })
        origin / main
    },

    productCreate: (req, res) => {
        res.render("productCreate", { titulo: "Creacion de producto" })
    },

    productCreate1: (req, res) => {

        let errors = validationResult(req)
        console.log(errors.mapped())
        console.log(req.session)

        if (errors.isEmpty()) {

            const categoria = db.Categoria.findAll({
                raw: true,
                where: {
                    nombre: req.body.categoria,

                }
            })
            const tipoDeEnsenianza = db.TipoDeEnsenianza.findAll({
                raw: true,
                where: {
                    nombre: req.body.tipoDeEnsenianza,

                }
            })
            Promise.all([categoria, tipoDeEnsenianza])
                .then(([categoria, tipoDeEnsenianza]) => {
                    const [categorias] = categoria
                    const [tipoDeEnsenianzas] = tipoDeEnsenianza
                    console.log(categorias)
                    console.log(tipoDeEnsenianza)
                    const curso = {
                        idCursos: uuidv4(),
                        titulo: req.body.titulo,
                        descripcion: req.body.descripcion,
                        descripcionQueAprenderas: req.body.descripcionQueAprenderas,
                        certificacion: req.body.certificacion,
                        precio: req.body.precio,
                        duracion: req.body.duracion,
                        actualizacion: Date.now(),
                        imagen: req.file.filename,
                        idUsuarios: req.session.usuarioLogueado.idUsuarios,
                        idtipoDeEnsenianza: tipoDeEnsenianzas.idtipoDeEnsenianza,
                        idCategorias: categorias.idCategorias
                    }
                    console.log(curso)

                    db.Curso.create(curso)

                })
                .catch(error => {
                    console.error('función enRechazo invocada: ', error)
                    res.render("productCreate", { titulo: "Creacion de producto", errors: errors.mapped(), oldDate: req.body })
                })




            product.create(curso)
            origin / main

            res.redirect('/');
        }
        else {
            res.render("productCreate", { titulo: "Creacion de producto", errors: errors.mapped(), oldDate: req.body })
        }

    },

    productEdit: (req, res) => {

        db.Curso.findAll({
            raw: true,
            where: {

                idCursos: req.params.id,

            }
        })
            .then((cursos) => {
                console.log(cursos)
                const [curso] = cursos
                const categoria = db.Categoria.findAll({
                    raw: true,
                    where: {
                        idCategorias: curso.idCategorias,

                    }
                })
                const tipoDeEnsenianza = db.TipoDeEnsenianza.findAll({
                    raw: true,
                    where: {
                        idtipoDeEnsenianza: curso.idtipoDeEnsenianza


                    }
                })
                Promise.all([categoria, tipoDeEnsenianza])
                    .then(([categoria, tipoDeEnsenianza]) => {
                        const [categorias] = categoria
                        const [tipoDeEnsenianzas] = tipoDeEnsenianza
                        console.log(categoria)
                        console.log(tipoDeEnsenianza)
                        curso.idtipoDeEnsenianza = tipoDeEnsenianzas.nombre
                        curso.idCategorias = categorias.nombre
                        console.log(cursos)
                        res.render("productEdit", { titulo: "Edicion de producto", curso })

                    })
                    .catch(error => {
                        console.error('función enRechazo invocada: ', error)
                    })


            })


    },

    productEdit1: (req, res) => {
        console.log(req.body)
        let errors = validationResult(req)



        if (errors.isEmpty()) {
            const categoria = db.Categoria.findAll({
                raw: true,
                where: {
                    nombre: req.body.categoria,

                }
            })
            const tipoDeEnsenianza = db.TipoDeEnsenianza.findAll({
                raw: true,
                where: {
                    nombre: req.body.tipoDeEnsenianza,

                }
            })
            Promise.all([categoria, tipoDeEnsenianza])
                .then(([categoria, tipoDeEnsenianza]) => {
                    const [categorias] = categoria
                    const [tipoDeEnsenianzas] = tipoDeEnsenianza
                    console.log(categorias)
                    console.log(tipoDeEnsenianza)

                    console.log(req.body.id)
                    db.Curso.update({
                        titulo: req.body.titulo,
                        descripcion: req.body.descripcion,
                        descripcionQueAprenderas: req.body.descripcionQueAprenderas,
                        certificacion: req.body.certificacion,
                        precio: req.body.precio,
                        duracion: req.body.duracion,
                        actualizacion: Date.now(),
                        idUsuarios: req.session.usuarioLogueado.idUsuarios,
                        idtipoDeEnsenianza: tipoDeEnsenianzas.idtipoDeEnsenianza,
                        idCategorias: categorias.idCategorias
                    },
                        {
                            where: {
                                idCursos: req.body.id

                            }
                        })
                        .catch(error => {
                            console.error('función enRechazo invocada: ', error)
                        })

                })
                .catch(error => {
                    console.error('función enRechazo invocada: ', error)
                    res.render("productCreate", { titulo: "Creacion de producto", errors: errors.mapped(), oldDate: req.body })
                })
            console.log(req.body)
            res.redirect('/users/perfil')

        } else {

            const curso = product.findByPk(req.body.id)

            res.render("productEdit", { titulo: "Edición de producto", errors: errors.mapped(), curso: curso })
        }

    },
    productDelete: (req, res) => {
        db.Curso.destroy({
            where: {
                idCursos: req.params.id,

            }
        })

        res.redirect('/users/perfil')

        const curso = product.findByPk(req.body.id)
        product.delete(req.body.id)

        fs.unlinkSync(path.join(__dirname, `../../public/img/products/${curso.imagen}`))

        res.render("productList", { cursos: curso, titulo: "listado de producto" })
        origin / main

    },

    productSearch: (req, res) => {
        console.log(req.body);
        db.Curso.findAll({
            raw: true,
            where: {
                titulo: { [Op.like]: `%${req.body.busqueda}%` }

            }
        })
            .then((cursos) => {
                console.log(cursos)
                res.render("productList", { cursos: cursos, titulo: "listado de producto", dueño: 0 })
            })
    }


}

module.exports = productController;