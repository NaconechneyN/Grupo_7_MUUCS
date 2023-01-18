const fs = require('fs')
const path = require('path')
const { validationResult, body } = require('express-validator')
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
                // console.log(cursos)
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
                // console.log(curso)
                res.render("productCart", { cursos: curso, titulo: "Carrito de producto" })
            })
    },
    productMiList: (req, res) => {db.Curso.findAll({
            raw: true,
            where: {

                idUsuarios: req.session.usuarioLogueado.idUsuarios,

            }
        })
            .then((cursos) => {
                // console.log(cursos)
                res.render("productList", { cursos: cursos, titulo: "listado de producto", dueño: 1 })
            })
            .catch(error => {
                console.error('función enRechazo invocada: ', error)
                res.redirect('/users/perfil')
            })
    },

    productCreate: async (req, res) => {
        try {
            const categorias = await db.Categoria.findAll()
            const tiposDeEnsenianza = await db.TipoDeEnsenianza.findAll()

            context = {
                titulo: "Creacion de Curso",
                categorias: categorias.map(categoria => categoria.dataValues),
                tiposDeEnsenianza: tiposDeEnsenianza.map(tipoDeEnsenianza => tipoDeEnsenianza.dataValues)
            }
            res.render("productForm", context)
        } catch(err) {
            res.status(500).send('HTTP Error 500 - Internal Server Error')
            return
        }
    },

    productCreate1: async (req, res) => {
        const errors = validationResult(req)
        // console.log(errors.mapped())
        // console.log(req.session)

        if (errors.isEmpty()) {

            const curso = {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                descripcionQueAprenderas: req.body.descripcionQueAprenderas,
                certificacion: req.body.certificacion,
                precio: req.body.precio,
                duracion: req.body.duracion,
                actualizacion: Date.now(),
                imagen: req.file.filename,
                idUsuarios: req.session.usuarioLogueado.idUsuarios,
                idtipoDeEnsenianza: req.body.tipoDeEnsenianza,
                idCategorias: req.body.categoria
            }

            try { 
                await db.Curso.create(curso)
                res.redirect('/users/perfil')
            } catch(err) {
                res.status(500).send('HTTP Error 500 - Internal Server Error')
            }
        }
        else {
            try {
                const categorias = await db.Categoria.findAll()
                const tiposDeEnsenianza = await db.TipoDeEnsenianza.findAll()

                context = {
                    titulo: "Creacion de Curso",
                    categorias: categorias.map(categoria => categoria.dataValues),
                    tiposDeEnsenianza: tiposDeEnsenianza.map(tipoDeEnsenianza => tipoDeEnsenianza.dataValues),
                    errors: errors.mapped(),
                    oldBody: req.body
                }
                
                res.render("productForm", context)
            } catch(err) {
                res.status(500).send('HTTP Error 500 - Internal Server Error')
            }
        }

    },

    productEdit: async (req, res) => {
        // Es una función asíncrona. Por eso se usa el 'try' 'catch' 
        try {
            // Se busca el curso con id pasado en 'req.params.id'
            // Se usa el 'await' para esperar que se resuelva la promesa. 
            const curso = await db.Curso.findByPk(req.params.id)
            if (curso.dataValues.idUsuarios !== req.session.usuarioLogueado.idUsuarios) {
                throw 403
            }
            // Se corrobora que no el resultado no sea 'null'
            if (curso) {
                // Se buscan los datos en modelos usados como 'llave foranea'
                const categorias = await db.Categoria.findAll()
                const tiposDeEnsenianza = await db.TipoDeEnsenianza.findAll()

                // Se crea el contexto
                // Se usa el 'dataValues' para acceder a los valores del objeto
                context = {
                    titulo: "Edicion de Curso",
                    curso: curso.dataValues,
                    categorias: categorias.map(categoria => categoria.dataValues),
                    tiposDeEnsenianza: tiposDeEnsenianza.map(tipoDeEnsenianza => tipoDeEnsenianza.dataValues)
                }
                
                res.render("productForm", context)
                return
            }
            res.status(404).send('HTTP Error 404 - Not Found')
            return
        } catch(err) {
            if (err === 403) {
                res.status(403).send('HTTP Error 403 - Forbidden')
            return
            }
            res.status(500).send('HTTP Error 500 - Internal Server Error')
            return
        }
    },

    productEdit1: async (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            try {
                const newCurso = {
                    titulo: req.body.titulo,
                    descripcion: req.body.descripcion,
                    descripcionQueAprenderas: req.body.descripcionQueAprenderas,
                    idCategorias: req.body.categoria,
                    idtipoDeEnsenianza: req.body.tipoDeEnsenianza,
                    precio: req.body.precio,
                    duracion: req.body.duracion,
                }

                const curso = await db.Curso.findByPk(req.params.id)
                if (curso.dataValues.idUsuarios !== req.session.usuarioLogueado.idUsuarios) {
                    throw 403
                }
                
                if (curso) {
                    await curso.update(newCurso)
                    res.redirect('/products/mi')
                    return
                }
                res.status(404).send('HTTP Error 404 - Not Found')
                return

            } catch(err) {
                if (err === 403) {
                    res.status(403).send('HTTP Error 403 - Forbidden')
                return
                }
                res.status(500).send('HTTP Error 500 - Internal Server Error')
                return
            }
        }
        
        try {
            const curso = await db.Curso.findByPk(req.params.id)
            if (curso.dataValues.idUsuarios !== req.session.usuarioLogueado.idUsuarios) {
                throw 403
            }
            if (curso) {
                const categorias = await db.Categoria.findAll()
                const tiposDeEnsenianza = await db.TipoDeEnsenianza.findAll()

                context = {
                    titulo: "Edicion de Curso",
                    curso: curso.dataValues,
                    categorias: categorias.map(categoria => categoria.dataValues),
                    tiposDeEnsenianza: tiposDeEnsenianza.map(tipoDeEnsenianza => tipoDeEnsenianza.dataValues),
                    errors: errors.mapped(),
                    oldBody: req.body
                }
                res.render("productForm", context)
                return
            }

        } catch(err) {
            if (err === 403) {
                res.status(403).send('HTTP Error 403 - Forbidden')
            return
            }
            res.status(500).send('HTTP Error 500 - Internal Server Error')
            return
        }
    },
    productDelete: (req, res) => {
        db.Curso.destroy({
            where: {
                idCursos: req.params.id,
            }
        })

        res.redirect('/users/perfil')
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
                // console.log(cursos)
                res.render("productList", { cursos: cursos, titulo: "listado de producto", dueño: 0 })
            })
    }


}

module.exports = productController;