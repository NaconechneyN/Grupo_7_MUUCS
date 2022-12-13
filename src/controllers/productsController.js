const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
const  {  v4 : uuidv4  }  =  require ( 'uuid' ) 
const product = require("../models/Products")
const carrito = require("../models/Carrito")
const db = require("../database/models")
const {Op} = require("sequelize")

//const db = require("../../database/models") 

const productController = {
    productList: (req, res) => {
        db.Curso.findAll({
            raw: true
          })
          .then((cursos) => {
            console.log(cursos)		
            res.render("productList", { cursos: cursos, titulo: "listado de producto", dueño : 0})
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
        const courses = product.filterByField("dueño", req.session.usuarioLogueado.nombreyapellido)
        res.render("productList", { cursos: courses, titulo: "listado de producto"})
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
            Promise.all([categoria,tipoDeEnsenianza])
            .then(([categoria,tipoDeEnsenianza]) => {
                const [categorias] = categoria
                const [tipoDeEnsenianzas] = tipoDeEnsenianza
                console.log(categorias)
                console.log(tipoDeEnsenianza)
                const curso = {
                    idCursos : uuidv4 ( ),
                    titulo : req.body.titulo,
                    descripcion : req.body.descripcion,
                    descripcionQueAprenderas : req.body.descripcionQueAprenderas,
                    certificacion : req.body.certificacion,
                    precio : req.body.precio,
                    duracion : req.body.duracion,
                    actualizacion : Date.now(),
                    imagen : req.file.filename,
                    idUsuarios : req.session.usuarioLogueado.idUsuarios,
                    idtipoDeEnsenianza : tipoDeEnsenianzas.idtipoDeEnsenianza,
                    idCategorias : categorias.idCategorias
                }
                console.log(curso)

                db.Curso.create(curso)
                
            })
            .catch( error => {
                console.error( 'función enRechazo invocada: ', error )
                res.render("productCreate", { titulo: "Creacion de producto", errors: errors.mapped(), oldDate : req.body })
              })

            
            product.create(curso)

            res.redirect('/');
        }
        else{
            res.render("productCreate", { titulo: "Creacion de producto", errors: errors.mapped(), oldDate : req.body })
        }

    },

    productEdit: (req, res) => {
        const id = req.params.id
        console.log(id)
        const curso = product.findByPk(id)
        console.log(curso)
        res.render("productEdit", { titulo: "Edicion de producto", curso: curso}) 
        
        
    },

    productEdit1: (req, res) => {
        console.log(req.body)
        let errors = validationResult(req)

        console.log(errors.mapped())

        if (errors.isEmpty()) {
            console.log(req.body)
            product.edit(req.body)
            
            res.redirect("/products/carritoT")

        }else{
            
            const curso = product.findByPk(req.body.id)
    
            res.render("productEdit", { titulo: "Edición de producto", errors: errors.mapped(), curso: curso})
        }

    },
    productDelete: (req, res) => {
        const curso = product.findByPk(req.body.id)
        product.delete(req.body.id)

        fs.unlinkSync(path.join(__dirname, `../../public/img/products/${curso.imagen}`))

        res.render("productList", { cursos: curso, titulo: "listado de producto" })

    },

    productSearch: (req, res) => {
        console.log(req.body);
        db.Curso.findAll({
            raw: true,
            where: {
                titulo: {[Op.like]:`%${req.body.busqueda}%`}
               
            }
          })
          .then((cursos) => {
            console.log(cursos)		
            res.render("productList", { cursos: cursos, titulo: "listado de producto", dueño : 0})
          })
    }

    
}

module.exports = productController;